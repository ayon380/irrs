import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-white font-bold mb-2">IRRS</h3>
            <p className="text-gray-400">Book your train tickets with ease.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-white font-bold mb-2">Quick Links</h4>
            <ul className="text-gray-400">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/book">Book Tickets</Link>
              </li>
              <li>
                <Link href="/pnr">Check PNR</Link>
              </li>
              <li>
                <Link href="/offers">Offers</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-white font-bold mb-2">Contact Us</h4>
            <Link href="mailto:connectirrs@gmail.com">
              <p className="text-gray-400">Email: connectirrs@gmail.com</p>
            </Link>
            <Link href="tel:+91-8100211809">
              <p className="text-gray-400">Phone: +91 8100211809</p>
            </Link>
            <div className="mt-4">
              <h4 className="text-white font-bold mb-2">Follow Us</h4>
              <div className="flex">
                <Link href="#" className="text-gray-400 hover:text-white mr-4">
                  <FaFacebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white mr-4">
                  <FaTwitter size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="flex justify-center">
            <p className="text-gray-400 mr-10">
              &copy; 2024 IRRS. All rights reserved.
            </p>
            <p className="text-gray-400">
              &copy; 2024 NoFilter LLC. All rights reserved.
            </p>
          </div>
          <p className="text-gray-400 mt-2">
            A product of NoFilter LLC - A leading technology company
            specializing in innovative solutions.
          </p>
          <p className="text-gray-400 mt-2">
            Visit{" "}
            <Link
              href="https://www.nofilter.cloud"
              className="text-blue-400 hover:text-blue-600"
            >
              www.nofilter.cloud
            </Link>{" "}
            to learn more.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
