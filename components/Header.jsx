"use client";
import { headerVales } from "@/public/dummydata/header";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary   ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-around h-16 ">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/luxi-x.png" height={200} width={200} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {headerVales.map((item, key) => (
                <Link id=""
                  key={key}
                  href={item.pathName}
                  className="text-gray-800 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition capitalize"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-gradient-to-r from-sky-600 to-cyan-400 text-white rounded-md text-sm font-medium">
              Get Quota
            </button>
          </div>
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
              <button className="w-full px-4 py-2 bg-gradient-to-r from-sky-600 to-cyan-400 text-white rounded-md text-sm font-medium">
                Get Quota
              </button>

              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;