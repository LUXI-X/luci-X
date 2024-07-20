import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectSection() {
  return (
    <section className='flex flex-col   min-h-screen bg-sky-100 py-8 px-4 sm:px-6 lg:px-28  '>
      <div className="py-8 flex justify-center">
        <h1 className="items-center text-2xl font-bold mt-2 uppercase tracking-wider">
          Projects we are done
        </h1>
      </div>
      
      <div className="flex justify-center">
        <div className="h-1 w-40 bg-gray-600 center"></div>
      </div>
      
      <div className="mx-18 sm:mx-8 lg:mx-12 my-8 lg:my-16 lg:px-64 mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-1">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4">
              <div className='transition-transform duration-300 hover:scale-105'>
                <Image src='/images/pro-img-1.svg' height={200} width={300} layout="responsive" objectFit="contain" alt="Project 1" />
              </div>
            </div>
            <div className="p-4">
              <div className='transition-transform duration-300 hover:scale-105'>
                <Image src='/images/pro-img-2.svg' height={200} width={300} layout="responsive" objectFit="contain" alt="Project 2" />
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2 p-2">
              <div className='transition-transform duration-300 hover:scale-105'>
                <Image src='/images/pro-img-4.svg' height={200} width={800} layout="responsive" objectFit="contain" alt="Project 4" />
              </div>
            </div>
          </div>

        <div className=" col-span-1 p-4">
          <div className=" h-full flex ">
          <Image className=" transition-transform duration-300 hover:scale-105 object-cover" src='/images/pro-img-3.svg' height={100} width={200} />
           
          </div>
        </div>
      </div>
    </div>



    <div className="text-center mx-auto mt-4 mb-10">
        <Link href="/" className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors text-sm">
          View All →
        </Link>
      </div>
    </section>
  )
}

export default ProjectSection
