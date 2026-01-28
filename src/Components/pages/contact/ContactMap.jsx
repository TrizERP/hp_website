"use client";

import React from 'react';

export default function ContactMap() {
    return (
        <section className="relative w-full h-[450px]">
            <div className="w-full h-full bg-slate-100">
                <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Scholar%20Clone%2C%20Adajan%2C%20Surat&t=&z=20&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full h-full"
                    title="Office Location"
                >
                </iframe>
            </div>
        </section>
    );
}
