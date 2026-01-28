import React from 'react';

const services = [
  { name: 'Integration', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e0e335fa9e655d46a9e2e8452acb4a97e5716191bbd7b05984bb78d021014a4?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3' },
  { name: 'Service Support', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49e732eb5e8e4b14403413b73337b0bcd307afde32c20b031790ffd770496dcf?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3' },
  { name: 'Mobile App', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/411ee4b6f7a81926743b1f29d9dc11679e6651f25b4992f297621bb2a84e4d5b?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3' },
  { name: 'Process Improvement', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/340821f15effc3aba11a10d136a3891ca94f8cd08afe6061fc98db04eb3b6952?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3' },
  { name: 'Role Wise Solutions', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2eeb77b5ed1c81eb025f31643bcf00463c896cdb51ad46118e499dc9b424a712?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3' }
];

function Services() {
  return (
    <section className="flex flex-col items-center pt-10 mt-0">
      <div className="flex flex-col justify-center items-center self-stretch px-10 py-10 mt-2 w-full max-md:px-5 max-md:mt-2 max-md:max-w-full" style={{
        background:'rgba(220, 255, 229, 1)',
      }}>
        <div className="flex flex-col w-full max-w-[1554px] max-md:max-w-full">
          <h2 className="lg:text-4xl sm:text-xl font-bold text-center text-slate-700 max-md:max-w-full max-md:text-3xl" style={{
           color: 'rgba(61, 96, 149, 1)',
          }}>
            Empower Your School with Seamless Integration, Tailored Solutions, and Advanced Tools for Every Role
          </h2>
          <div className="mt-12 mr-4 ml-4 max-md:mt-8 max-md:mr-2 max-md:max-w-full">
            <div className="flex gap-8 flex-wrap justify-center">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 lg:px-6 lg:py-4 sm:px-6 sm:py-4 w-full lg:max-w-[320px] sm:max-w-[240px] lg:text-xl sm:text-sm font-bold text-orange-500 whitespace-nowrap rounded-lg bg-white shadow-md">
                  <img loading="lazy" src={service.icon} alt={`${service.name} icon`} className="object-contain max-w-full aspect-square lg:w-[60px] sm:w-[30px]" />
                  <div className="text-center">
                    {service.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
