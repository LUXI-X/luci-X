import React from 'react'
import { IoMdContact } from "react-icons/io";

function ContactSection() {
  return (
    <section id="ContactSection" className='mb-16 bg-primary px-4 sm:px-6 lg:px-8'>
    <div className="relative mx-auto max-w-7xl py-10 sm:py-16 lg:py-20  rounded-sm overflow-hidden">
  <div className="absolute inset-0" style={{ 
    clipPath: 'polygon(0 11%, 100% 45%, 100% 85%, 0 85%)',
    position: 'relative'
  }}></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 px-4 sm:px-6 lg:px-12">
          <div className='text-center lg:text-left'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold leading-tight'>
              Keep Your Business Safe & Ensure <br className="hidden sm:inline" />
              High Availability.
            </h1>
          </div>
          <div className='text-center lg:text-left'>
            <p className="mb-2">Reach out now</p>
            <div className='flex items-center justify-center lg:justify-start'>
              <IoMdContact size={23} />
              <p className='ml-2 font-bold'> +1-800-456-478-24</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection