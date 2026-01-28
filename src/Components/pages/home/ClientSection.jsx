// components/ServicesSection.tsx
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="lg:py-16 lg:px-20 lg:mt-0 sm:mt-5 bg-white mx-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black">
          Our Team Provides Valuable Services at <br /> Any Time in Any Situation
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12 text-left">
        {/* Expert Guidance */}
        <div className="flex flex-col items-start text-left">
          <div className="bg-blue-100 rounded-full p-6 mb-6">
            <Image src="/new cor/Vector.png" alt="Expert Guidance" width={40} height={40} />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4">Expert Guidance</h3>
          <p className="text-black mb-4">
            Rely on seasoned professionals for tailored financial advice and strategic planning aligned with your unique goals
          </p>
          <a href="#" className="text-blue-600 font-semibold">Read more</a>
        </div>

        {/* Risk Management */}
        <div className="flex flex-col items-start text-left">
          <div className="bg-red-100 rounded-full p-6 mb-6">
            <Image src="/new cor/Vector2.png" alt="Risk Management" width={40} height={40} />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4">Risk Management</h3>
          <p className="text-black mb-4">
            We expertly handle and proactively mitigate financial risks, ensuring the safeguard of assets and overall stability
          </p>
          <a href="#" className="text-blue-600 font-semibold">Read more</a>
        </div>

        {/* Customized Solutions */}
        <div className="flex flex-col items-start text-left">
          <div className="bg-green-100 rounded-full p-6 mb-6">
            <Image src="/new cor/Vector3.png" alt="Customized Solutions" width={40} height={40} />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4">Customized Solutions</h3>
          <p className="text-black mb-4">
            Receive and benefit from financial solutions that are tailored to your unique financial challenges and aspirations
          </p>
          <a href="#" className="text-blue-600 font-semibold">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
