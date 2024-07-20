import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ClintCart from './cart/ClintCart'

function ClintReview() {
  const reviews = [
    {
      title: "Easy to Customize",
      description: "Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio.",
      name: "Stephen Mearsley",
      details: "Founder"
    },
    {
      title: "Easy to Customize",
      description: "Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio.",
      name: "Stephen Mearsley",
      details: "Founder"
    },
    {
      title: "Easy to Customize",
      description: "Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio.",
      name: "Stephen Mearsley",
      details: "Founder"
    }
  ];

  return (
    <section className='container mx-auto px-4 py-12'>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase tracking-wider mb-4">
          What our Clients Say?
        </h1>
        <div className="h-1 w-40 bg-gray-600 mx-auto"></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {reviews.map((review, index) => (
          <ClintCart
            key={index}
            title={review.title}
            description={review.description}
            name={review.name}
            details={review.details}
          />
        ))}
      </div>
    </section>
  )
}

export default ClintReview