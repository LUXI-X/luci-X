import React from 'react'
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';

function LinkSection() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", hoverColor: "hover:text-blue-600" },
    { icon: <FaGoogle />, href: "#", hoverColor: "hover:text-red-600" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/rajput_tejpal_singh1225/", hoverColor: "hover:text-pink-600" },
    { icon: <FaTwitter />, href: "#", hoverColor: "hover:text-blue-400" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCg0u0SiCr99WcubHzLoLlFA", hoverColor: "hover:text-red-600" },
    { icon: <FaWhatsapp />, href: "https://www.whatsapp.com/channel/0029Va57lrP1SWtAGbQTSN15", hoverColor: "hover:text-green-600" },
    { icon: <IoLogoGithub />, href: "https://github.com/LUXI-X", hoverColor: "hover:text-orange-900" },
  ];

  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 my-12'>
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <span className="text-gray-500 text-center lg:text-left mb-6 lg:mb-0">
            Trusted by world's <br className="hidden sm:inline" /> Leading Companies <br className="hidden sm:inline" /> &amp; Startups
          </span>
          
          <div className="w-full lg:w-auto">
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-gray-600 ${link.hoverColor} transition-colors duration-300 text-xl`}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LinkSection