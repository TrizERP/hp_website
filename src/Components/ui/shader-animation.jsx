"use client";

import { useEffect, useRef, useState } from "react";

export function ShaderAnimation({ className = "" }) {
  const containerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    let cleanupFunc = () => { };
    let isMounted = true;

    const initShader = async () => {
      try {
        const THREE = await import("three");
        if (!isMounted) return;

        const container = containerRef.current;
        if (!container) return;

        // Cleanup existing renderer if any
        if (container.firstChild) {
          container.innerHTML = '';
        }

        // Vertex shader
        const vertexShader = `
                    void main() {
                        gl_Position = vec4( position, 1.0 );
                    }
                `;

        // Fragment shader - Original colorful version with dark background
        const fragmentShader = `
                    #define TWO_PI 6.2831853072
                    #define PI 3.14159265359

                    precision highp float;
                    uniform vec2 resolution;
                    uniform float time;

                    void main(void) {
                        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
                        float t = time * 0.05;
                        float lineWidth = 0.002;

                        vec3 color = vec3(0.0);
                        for(int j = 0; j < 3; j++){
                            for(int i = 0; i < 5; i++){
                                color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
                            }
                        }
                        
                        gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
                    }
                `;

        // Initialize Three.js scene
        const camera = new THREE.Camera();
        camera.position.z = 1;

        const scene = new THREE.Scene();
        const geometry = new THREE.PlaneGeometry(2, 2);

        const uniforms = {
          time: { value: 1.0 },
          resolution: { value: new THREE.Vector2() },
        };

        const material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let renderer;
        try {
          renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            // Removed high-performance preference to reduce context loss risk
          });
        } catch (e) {
          console.error("Failed to create WebGLRenderer", e);
          return;
        }

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        container.appendChild(renderer.domElement);

        // Handle window resize
        const onWindowResize = () => {
          if (!container) return;
          const width = container.clientWidth;
          const height = container.clientHeight;
          if (width > 0 && height > 0) {
            renderer.setSize(width, height);
            uniforms.resolution.value.x = renderer.domElement.width;
            uniforms.resolution.value.y = renderer.domElement.height;
          }
        };

        // Initial resize
        onWindowResize();
        window.addEventListener("resize", onWindowResize, false);

        // Animation loop
        let animationId;
        const animate = () => {
          if (!isMounted) return;
          animationId = requestAnimationFrame(animate);
          uniforms.time.value += 0.05;
          renderer.render(scene, camera);
        };

        animate();

        // Assign cleanup logic
        cleanupFunc = () => {
          window.removeEventListener("resize", onWindowResize);
          cancelAnimationFrame(animationId);

          if (container && renderer.domElement && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }

          if (renderer) {
            renderer.dispose();
            // Removed forceContextLoss() as it was causing browser blocks
          }
          if (geometry) geometry.dispose();
          if (material) material.dispose();
        };
      } catch (error) {
        console.error("ShaderAnimation error:", error);
      }
    };

    // Small delay to ensure container is ready
    const timeoutId = setTimeout(() => {
      initShader();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      cleanupFunc();
    };
  }, [isClient]);

  return (
    <div
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full ${className}`}
      style={{
        overflow: "hidden",
        zIndex: 0,
        background: "#2A3E5C",
      }}
    />
  );
}

export default ShaderAnimation;
