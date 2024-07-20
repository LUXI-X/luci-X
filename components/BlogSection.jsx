import React from 'react';
import BlogCart from './cart/BlogCart';

function BlogSection() {
  return (
    <section  id="BlogSection"  className="mx-8 min-h-screen">
     <div className="py-8 flex justify-center ">
        <h1 className="items-center text-2xl font-bold  mt-2 uppercase tracking-wider">
        Recent Blogs
        </h1>
      </div>
      <p className="text-sm text-center mb-8">
        Thought leading articles from the forefront of web design and development, SEO, digital marketing, <br></br> eCommerce, content strategies, and analytics. Dive right in!
        </p>

      <div className="flex justify-center ">
        <div className="h-1 w-40  bg-gray-600 center"></div>
      </div>
     

      

      
        <BlogCart
          date="11 April 2023"
          title="Design"
          description="Technology allows profit to serve the community"
          description1="🤵 By Admin"
          description2="💬 1 comments" 
         />
    
    </section>
  );
}

export default BlogSection;
