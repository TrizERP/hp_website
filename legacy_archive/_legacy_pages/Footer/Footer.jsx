import React from 'react';
import SocialIcons from './SocialIcons';
import FooterColumn from './FooterColumn';

const footerColumns = [
  {
    title: 'Home',
    items: ['Home', 'About Us', 'Who We Serve', 'Blogs and Brochures', 'Contact Us', 'Request a Free Demo'],
    itemRoutes: ['/center_home', '/aboutus', '/who-we-serve','/blogs-and-brochures', '/contactGlobal', '/request-demo'] // Example paths
  },
  {
    title: 'K-12 Solution',
    items: ['Home','Products', 'Services', 'Resources & Blogs', 'Contact Us', 'Book Demo'],
    itemRoutes: ['/', '/erpservice', '/supportservice', '/resources', '/contactGlobal', '/book-demo'] // Example paths
  },
   {
     title: 'Higher Education',
     items: ['Home','Products', 'Services', 'Resources & Blogs', 'Contact Us', 'Book Demo'],
     itemRoutes: ['https://triz-apphigher-education.vercel.app/','https://triz-apphigher-education.vercel.app/product-one', 'https://triz-apphigher-education.vercel.app/product-six', 'https://triz-apphigher-education.vercel.app/resources', 'https://triz-apphigher-education.vercel.app/contactGlobal', '/book-demo'] // Example paths
    },
   {
     title: 'Corporate Solution',
     items: ['Home', 'Products', 'Services', 'Resources & Blogs', 'Contact Us', 'Book Demo'],
     itemRoutes: ['/', '/aboutus', '/products', '/services', '/resources-blogs', '/contactus', '/book-demo'] // Example paths
   }
];

function Footer() {
  return (
    <footer className="flex flex-col lg:px-0 lg:py-2 md:px-0 md:py-0 items-center bg-[#014D68] sm:px-4 sm:py-6">
      <div className="lg:flex lg:flex-wrap lg:mt-2 lg:gap-48 lg:w-full lg:max-w-[1760px] max-md:max-w-full">
        <div className="flex flex-col items-center font-bold">
          <img
            loading="lazy"
            src="/footer_c_images/Group 232.png"
            className="object-contain max-w-full lg:ml-20 aspect-[2.67] lg:w-[200px] sm:w-[120px] sm:mb-0"
            alt="Company Logo"
          />
          <div className="mt-20 text-2xl ml-5 text-blue-300 max-md:mt-10">
        Contact Us
      </div>
      <form className="w-full">
        <label htmlFor="contactInput" className="sr-only">Contact information</label>
        <input
          type="text"
          id="contactInput"
          className="flex shrink-0 self-stretch pr-2 mt-2 bg-white ml-5 rounded-2xl h-[35px] w-[240px]"
          aria-label="Contact information"
        />
        <button type="submit" className="px-5 py-2 text-sm mt-2 ml-20 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-full">
          Contact Us
        </button>
      </form>
        </div>
        
        <nav className="lg:flex md:flex lg:flex-auto lg:my-auto sm:hidden"> 
       
            {footerColumns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                items={column.items}
                itemRoutes={column.itemRoutes}  // Pass itemRoutes to FooterColumn
              />
            ))}

        </nav>
<nav className="flex w-full justify-center gap-8 max-md:flex-wrap sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-4 md:hidden lg:hidden">
  {footerColumns.map((column, index) => (
    <FooterColumn
      key={index}
      title={column.title}
      items={column.items}
      itemRoutes={column.itemRoutes}  // Pass itemRoutes to FooterColumn
    />
  ))}
</nav>
      </div>

      {/* Centered Copyright and Social Icons */}
      <div className="flex flex-wrap justify-center items-center lg:gap-40 lg:mt-10 sm:gap-10 sm:mt-2 text-center">
        <p className="lg:text-md lg:font-bold text-white font-interregular sm:font-bold sm:mb-[-20px] md:mb-[0px] sm:text-sm">
          All Rights Are Reserved By 2024 © Scholar Clone.
        </p>
        <SocialIcons />
      </div>
    </footer>
  //   <footer className="flex flex-col items-center bg-gradient-to-r from-green-300 to-green-500 px-4 py-6">
  //   {/* Logo Section */}
  //   <div className="flex flex-col items-center sm:items-start sm:w-full">
  //     <img
  //       loading="lazy"
  //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a56b7f30c288fdbf94315759b0debfadd22be2e9a91b1b4848f1a36feab3aa4?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
  //       className="object-contain w-[200px] aspect-[2.67] sm:w-[120px] sm:mb-4"
  //       alt="Company Logo"
  //     />
  //   </div>

  //   {/* Footer Columns */}
  //   <nav className="flex w-full justify-center gap-12 max-md:flex-wrap sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6">
  //     {footerColumns.map((column, index) => (
  //       <FooterColumn
  //         key={index}
  //         title={column.title}
  //         items={column.items}
  //         itemRoutes={column.itemRoutes}
  //       />
  //     ))}
  //   </nav>

  //   {/* Copyright and Social Icons */}
  //   <div className="flex flex-col items-center gap-4 mt-6 sm:mt-4">
  //     <p className="text-sm font-semibold text-black sm:text-xs text-center">
  //       All Rights Are Reserved By 2024 © Triz Innovation PVT LTD.
  //     </p>
  //     <SocialIcons />
  //   </div>
  // </footer>
  );
}

export default Footer;
