import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return(
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        © {currentYear} All rights reserved by Grow
      </p>
    </div>
  )
 
  };

export default Footer;
