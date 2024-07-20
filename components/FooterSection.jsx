import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

function FooterSection() {
  return (
    <section>
      <footer className="py-12 px-4 mx-10c sm:px-6 lg:px-8 bg-primary rounded-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo and Contact Info */}
            <div>
              <div className='mb-16'>
                <a href="#">
                  <Image src="/images/luxi-x.png" height={200} width={200} alt="Logo" />
                </a>
              </div>
              <p className="mb-2">1st Main Rd, Jayamahal Extension, Jayamahal, 560084 - Bangalore Karnataka India</p>
              <p className="flex items-center mb-2">
                <FaPhone className="mr-2" /> +1-800-456-478-24
              </p> f
              <p className="flex items-center mb-2">
                <FaEnvelope className="mr-2" /> Support@example.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">@</span> example
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="hover:scale-105 transition-all duration-300"><FaFacebook /></a>
                <a href="#" className="hover:scale-105 transition-all duration-300"><FaTwitter /></a>
                <a href="#" className="hover:scale-105 transition-all duration-300"><FaInstagram /></a>
                <a href="#" className="hover:scale-105 transition-all duration-300"><FaLinkedin /></a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 relative inline-block transition-all duration-300 ease-in-out hover:text-amber-300 group">Quick Links
                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Home
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">About Us
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Blog
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Partner with Us
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Carrier
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Testimonials
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
              </ul>
            </div>
            {/* Care Services */}
            <div>
              <h4 className="font-bold mb-4 relative inline-block transition-all duration-300 ease-in-out hover:text-amber-300 group">Care Services
                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">PHP Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Laravel Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Magento Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">WordPress Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Blockchain Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
              </ul>
            </div>
            {/* Popular Services */}
            <div>
              <h4 className="font-bold mb-4 relative inline-block transition-all duration-300 ease-in-out hover:text-amber-300 group">Popular Services
                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">FinTech Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Blockchain Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Crypto Wallet Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Web App Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Software Development
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Python Development <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span> 
                </a></li>
                <li><a href="#" className="relative inline-block transition-all duration-300 ease-in-out hover:text-blue-600 group">Flutter App Development <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span> 
                </a></li>
                </ul>
            </div>
            </div>
        </div>
        </footer>

        </section>
    )
    }

    export default FooterSection
