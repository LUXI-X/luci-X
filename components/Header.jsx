"use client";
import { headerVales } from "@/public/dummydata/header";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Header() {
  // State to manage the toggle of the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  
  // Router hook for navigation
  const router = useRouter();

  // Function to handle logout
  const logout = async () => {
    try {
      // Call the API to logout the user
      await axios.get('http://localhost:3000/api/logout' ,{ withCredentials: true });
      
      // Show a success message
      toast.success('Logout Successfully');
      
      // Redirect the user to the login page
      router.push('/login');
    } catch (error) {
      // Log any error to the console
      console.log(error.message);
      
      // Show an error message
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/luxi-x.png" height={200} width={200} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {headerVales.map((item, key) => (
                <Link
                  key={key}
                  href={item.pathName}
                  className="text-gray-800 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition capitalize"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Logout Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => {
                setIsOpen(!isOpen);
                logout();
              }}
              className="px-4 py-2 bg-gradient-to-r from-sky-600 to-cyan-400 text-white rounded-md text-sm font-medium hover:bg-gradient-to-r hover:from-gray-100 hover:to-cyan-400 hover:text-black"
            >
              Log out
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* Icon changes based on whether the menu is open or closed */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {headerVales.map((item, key) => (
              <Link
                key={key}
                href={item.pathName}
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition capitalize"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              {/* Mobile Logout Button */}
              <button
                onClick={() => {
                  setIsOpen(false); // Close the menu after logout
                  logout();
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-sky-600 to-cyan-400 text-white rounded-md text-sm font-medium hover:bg-gradient-to-r hover:from-gray-100 hover:to-cyan-400 hover:text-black"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
