import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HomeSection() {
  return (
    <section id="HomeSection" className='container mx-auto px-4 py-8 sm:py-12 md:py-24 flex flex-col md:flex-row items-center min-h-screen'>
      <div className='w-full md:w-1/2  mb-8 md:mb-0'>
        <div className='text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>
          {['Innovative', 'Development Solutions', 'for Your Digital', 'Success'].map((text, index) => (
            <p key={index} className='bg-gradient-to-r from-[#2929B8] to-[#00D4FF] text-transparent bg-clip-text'>
              {text}
            </p>
          ))}
        </div>
        
        <p className="text-sm sm:text-base mb-6 sm:mb-8 text-gray-600">
          We Specialize in Delivering Comprehensive Development Services To
          Meet all your Digital needs. From Dynamic Web Development To
          Cutting-Edge Mobile Applications For Both Android And iOS, We Cover it
          All.
        </p>
        <Link href="/service">
        <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-300 text-black-600 rounded-md hover:bg-sky-100 transition duration-300">
          Let's Talk
        </button> </Link>
      </div>
      
      <div className='w-full md:w-1/2 flex justify-center mt-8 md:mt-0'>
        <div className='relative w-full max-w-[400px] aspect-square sm:aspect-[4/3] md:aspect-[16/9]'>
          <Image
            src='/images/hero.svg'
            alt="Hero Image"
            layout='fill'
            objectFit='contain'
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HomeSection