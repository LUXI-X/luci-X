import React from 'react';
import Image from 'next/image';

function BlogCart({ date, title, description, description1, description2 }) {
  return (

<div className="container mx-auto px-4 py-8">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-4 sm:p-6">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
            src="/images/plant.svg"
            alt="Leaves"
            layout="fill"
            objectFit="cover"
           className="rounded-lg"
       />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-600">{date}</span>
                <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {title}
                </span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 line-clamp-2">{description}</h3>
              <div className="flex justify-between text-xs sm:text-sm text-gray-600">
              <span>{description1}</span>
               <span>{description2}</span>
              </div>
            </div>
          </div>
       ))}
      </div>
    </div>



                
  
  );
}

export default BlogCart;
