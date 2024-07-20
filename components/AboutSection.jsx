"use client";
import { abouticon, aboutBackedn, aboutdatabase } from "@/public/dummydata/abouticon";
import { aboutvalues } from "@/public/dummydata/aboutsection";
import Image from "next/image";
import React, { useState } from "react";

function AboutSection() {
  const [selectedValues, setSelectedValues] = useState("Frontend");

  const luxiicon = (icons) => (
    <div className="mx-4 sm:mx-8 md:mx-20 my-4 sm:my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {icons.map((items, key) => (
        <div
          className="mx-4 sm:mx-8 mb-4 sm:mb-8 px-10 sm:px-20 py-7 sm:py-14 bg-white justify-center rounded-lg flex flex-col items-center transition-transform duration-300 transform hover:scale-95"
          key={key}
        >
          <Image className="mb-4" src={items.icon} height={40} width={40} alt={items.name} />
          <p className="text-center">{items.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section id="AboutSection" className="min-h-screen">
      <div className="py-8 text-center text-black text-3xl font-bold uppercase">
        <h1>
          Unleash Digital Innovation with Our <br />
          Technology Expertise  
        </h1>
      </div>

      <div className="flex justify-center mt-5">
        <ul className="flex items-center gap-4 sm:gap-10">
          {aboutvalues.map((item, key) => 
          (
            <li
              key={key}
              onClick={() => setSelectedValues(item.name.trim())}
              className={`mb-1 text-1xl cursor-pointer font-bold rounded-lg transition capitalize ${
                selectedValues === item.name.trim()
                  ? "border border-blue-300 px-3 py-2"
                  : "hover:text-gray-600"
              }`}
            >
              {item.name}
            </li>
          )
          
          )}
        </ul>
      </div>

      {selectedValues === "Frontend"
        ? luxiicon(abouticon)
        : selectedValues === "Backend"
        ? luxiicon(aboutBackedn)
        : selectedValues === "Database"
        ? luxiicon(aboutdatabase)
        : null}




    </section>
  );
}

export default AboutSection;
