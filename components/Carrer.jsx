import React from "react";
import Cart from "./cart/Cart";
import Image from "next/image";
import Link from "next/link";

function Carrer() {
  return (
    <section id="Carrer" className="min-h-screen">
      <div className="py-8 flex justify-center">
        <h1 className="items-center text-2xl font-bold mt-2 uppercase tracking-wider text-center">
          Leading Software Development Company
        </h1>
      </div>

      <div className="flex justify-center mb-14">
        <div className="h-1 w-40 bg-gray-600"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-14">
        <div className="relative flex flex-col lg:w-1/2">
          <div className="absolute top-0 mb-6 hidden lg:block">
            <Cart
              title="Client Served"
              value="120"
              description="Who trust us to provide 
    what they require"
            />
          </div>

          <div className="absolute top-12 mb-6 lg:ml-[20vw] hidden lg:block">
            <Cart
              title="Industries"
              value="25"
              description="As we promote transparency and increase the quality"
            />
          </div>

          <div className="absolute top-52 hidden lg:block">
            <Cart
              title="Technologies"
              value="15"
              description="We expertise in modern technologies"
            />
          </div>

          <div className="absolute top-56 lg:ml-[20vw] hidden lg:block">
            <Cart
              title="Client Served"
              value="120"
              description="Highly recommended 
    by customers"
            />
          </div>
        </div>

        <div className="flex-1 lg:ml-14 mt-8 lg:mt-0">
          <p className="font-bold mb-4 text-center lg:text-left">
            Delivering outstanding software development services to our esteemed
            customers for a decade.
          </p>
          <span className="block text-center lg:text-left">
            Our team is a leading software development company specializing in
            developing innovative software solutions utilizing cutting-edge
            technologies. A team of experienced developers that supports
            businesses and helps them in remaining forward in the curve by
            developing goal-specific and pioneering software. We are a leader in
            Fintech, SAAS Products, Blockchain development, and Software
            solutions company.
          </span>

          <div className="mt-6 flex gap-11 justify-center lg:justify-start">
            <div className="w-36 h-12 bg-white">
              <Image src="/icons/clutch.svg" height={500} width={600} alt="Clutch" />
            </div>
            <div className="w-36 h-12 bg-white"></div>
            <div className="w-36 h-12 bg-white"></div>
          </div>

          <div className="mt-10 text-center lg:text-left">
            <Link
              href="#"
              className="bg-gradient-to-r from-indigo-800 to-cyan-400 shadow border text-white font-bold py-2 px-4 rounded inline-block transition-transform duration-300 transform hover:scale-95"
            >
              Explore more
            </Link>
          </div>
        </div>
      </div>

      <div className="border-2 border-blue-400 mx-4 lg:mx-12 my-20 flex flex-col lg:flex-row justify-between items-center p-6">
        <div className="flex flex-col items-start mb-6 lg:mb-0">
          <h1 className="font-bold text-3xl mb-4 text-center lg:text-left">
            Let's Discuss Your Project
          </h1>
          <p className="mb-6 text-center lg:text-left">
            Let us know your project idea and get free consultation to turn it
            into an amazing digital product.
          </p>
          <Link
            href="#"
            className="bg-primary border-2 border-blue-400 shadow text-black font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-95"
          >
            Talk to our expert
          </Link>
        </div>
        <div className="flex justify-center">
          <Image src="/icons/des-iocn.svg" height={200} width={200} alt="Icon" />
        </div>
      </div>
    </section>
  );
}

export default Carrer;
