import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // For social icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Left Side - Contact Info */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
          </ul>
        </div>

        {/* Right Side - Social Media */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
          <p>Subscribe to get the latest updates and offers.</p>
          <form action="#" method="post" className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-md text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center mt-4">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
