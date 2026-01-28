import React from 'react';
import SocialIcons from './SocialIcons';
import FooterColumn from './FooterColumn';

const footerColumns = [
  {
    title: 'Home',
    items: ['Home', 'About Us', 'Who We Serve', 'Blogs and Brochures', 'Contact Us', 'Request a Free Demo'],
    itemRoutes: ['/center_home', '/aboutus', '/who-we-serve', '/blogs-and-brochures', '/contactGlobal', '/request-demo'] // Example paths
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
// bg-gradient-to-r from-[rgb(42,62,92)] to-[rgb(42,62,92)]
function Footer() {
  return (
    <footer className="flex flex-col lg:px-0 lg:py-2 md:px-0 md:py-0 sm:py-2 sm:px-4 items-center bg-gradient-to-r from-[rgb(42,62,92)] to-[rgb(42,62,92)]">
    <div className="lg:flex lg:flex-wrap lg:mt-2 lg:gap-48 lg:w-full lg:max-w-[1760px] max-md:max-w-full">
      <div className="flex flex-col items-center font-bold">
          <img
            loading="lazy"
            src="/footer_c_images/Group 232.png"
            className="object-contain max-w-full lg:ml-20 aspect-[2.67] lg:w-[200px] sm:w-[120px] sm:mb-0"
            alt="Company Logo"
          />
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
        <p className="lg:text-md lg:font-bold text-white sm:font-bold sm:mb-[-20px] md:mb-[0px] sm:text-sm">
          All Rights Are Reserved By 2024 © Triz Innovation PVT LTD.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;
