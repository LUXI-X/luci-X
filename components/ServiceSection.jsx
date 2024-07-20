"use client";
import { sectionvalue } from "@/public/dummydata/servicesection";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function ServiceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current.querySelectorAll('.service-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ServiceSection" className="bg-white min-h-screen" ref={sectionRef}>
      <div className="py-8 text-center text-black text-2xl font-bold uppercase">
        How We Can Help You?
        <div className="flex justify-center mt-5">
          <div className="h-1 w-40 bg-primary center"></div>
        </div>
      </div>

      <div className="text-center text-neutral-600 pt-4 text-sm mt-2">
        <p>
          With a team of enthusiastic and self-motivated experts, we focus on
          providing innovative web <br></br>
          development and online marketing solutions. Our core mission is to
          make businesses more profitable <br></br>
          with effortless and practical business solutions.
        </p>
      </div>

      <div className="mx-2 my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {sectionvalue.map((items, key) => (
          <div className="service-item mx-12 mt-4 h-17 py-4 px-10 text-xl mb-4 opacity-0" key={key}>
            <Image
              className="mb-7"
              src={items.icon}
              height={40}
              width={40}
              alt="logo"
            />
            <p className="mb-3">{items.name}</p>
            <p className="h-17 text-sm text-gray-400">{items.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;