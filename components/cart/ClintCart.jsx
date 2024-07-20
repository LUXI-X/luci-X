import React from 'react'
import Image from 'next/image'

function ClintCart({ title, description, name, details }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center">
      <Image src="/images/women.svg" alt="women" width={50} height={50} className="rounded-full" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{details}</p>
        </div>
      </div>
    </div>
  )
}

export default ClintCart