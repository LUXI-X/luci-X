import React from 'react'

function Cart({title, value, description}) {
  return (
   <section>

        <div className="w-64 border-2 border-blue-400 bg-blue-100 mx-4 my-4  px-6 py-6 rounded-lg text-center" >
          <p className='text-justify text-black font-bold'>{title}</p>
          <h1 className='  text-justify font-bold bg-gradient-to-r from-blue-700 to-indigo-200 text-transparent bg-clip-text'>{value}+</h1>
          <p className=' text-sm text-start'>{description}</p>
        </div>
       


   </section>
  )
}

export default Cart
