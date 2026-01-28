import React from 'react';

const ClientSection = () => {
  const clients = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    src: `/home_images/clients/${index + 1}.png`,
    alt: `Client logo ${index + 1}`,
  }));

  const clientWidth = 150; // Width of each logo
  const containerWidth = clientWidth * clients.length; // Total width of all logos

  return (
    <section className="flex overflow-hidden flex-col pt-2 pb-2 mt-10 mb-6 w-full lg:text-3xl md:text-xl sm:text-md font-bold text-center text-amber-500 bg-blue-100 bg-opacity-80 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center font-noto">Our valued clients</h2>
      <div className="mt-0 max-md:mt-10 relative w-full lg:h-[150px] sm:h-[80px]">
        {/* Image container with smooth scrolling animation */}
        <div
          className="flex absolute gap-40 top-0 left-0 h-full animate-scroll"
          style={{
            width: `${containerWidth * 2}px`, // Container width to accommodate both the original and duplicate sets
          }}
        >
          {/* First set of images */}
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex-shrink-0 lg:w-[150px] sm:w-[80px] h-full" // Maintain consistent width for logos
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          {/* Duplicate the logos to create a continuous loop */}
          {clients.map((client) => (
            <div
              key={client.id + '-duplicate'}
              className="flex-shrink-0 lg:w-[150px] sm:w-[80px] h-full" // Same width as original logos
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
