import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-16 text-black border-t border-blue-200">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-3xl font-extrabold text-blue-800 mb-4">SaiFashionZone</h4>
        <p className="text-gray-600 mb-4 text-center md:text-left">
          Your one-stop destination for thoughtful and unique gifts.
        </p>
        <div className="flex space-x-6 text-3xl mt-4">
          <FaFacebook className="text-blue-600 hover:text-blue-800 transition cursor-pointer" />
          <FaInstagram className="text-blue-600 hover:text-blue-800 transition cursor-pointer" />
          <FaTwitter className="text-blue-600 hover:text-blue-800 transition cursor-pointer" />
        </div>
      </div>
      <div className="text-center md:text-right">
        <h5 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h5>
        <p className="text-gray-600">
          3181 Street Name, City, India
          <br />
          Email: support@SaiFashionZone.com
          <br />
          Phone: +91 1234567890
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;