import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <>
      {/* Heading */}
      <div className="text-center font-bold text-2xl sm:text-3xl my-6">
        About Us
      </div>

      {/* About Section */}
      <section className="flex flex-col md:flex-row gap-8 px-4 md:px-12 items-center">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.about_image}
            alt="About"
            className="w-full h-auto rounded-lg md:max-h-full"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-sm sm:text-base">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sit enim sunt optio esse qui, sed fuga eaque assumenda nihil consequuntur deserunt beatae.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas nostrum nisi perspiciatis, aspernatur magnam voluptates numquam.
          </p>
          <p className="mb-4 md:hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas nostrum nisi perspiciatis, aspernatur magnam voluptates numquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, fugit delectus voluptatem beatae repudiandae ipsa a atque, illo recusandae laboriosam aut minus maxime voluptatibus totam, quaerat distinctio cum dolorum sit.
          </p>
          
          <h3 className="mt-6 mb-3 font-bold text-xl sm:text-2xl md:hidden lg:block">
            Our Vision
          </h3>

          <p className='md:hidden lg:block'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nisi adipisci odio odit, perferendis quidem ipsum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod itaque veritatis ut corporis perferendis qui est deserunt esse dolorem beatae alias nam quis adipisci fugiat eum, eligendi iusto similique?
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 md:px-12 mt-12">
        <h2 className="text-xl sm:text-2xl mb-6">
          Why <span className="font-bold">Choose Us</span> ?
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap gap-2">
          
          {/* Card */}
          <div className="border p-4 rounded-md w-full sm:w-60">
            <h3 className="font-bold mb-2">Efficiency</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="border p-4 rounded-md w-full sm:w-60">
            <h3 className="font-bold mb-2">Reliability</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="border p-4 rounded-md w-full sm:w-60">
            <h3 className="font-bold mb-2">Quality</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="border p-4 rounded-md w-full sm:w-60">
            <h3 className="font-bold mb-2">Quality</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          

        </div>
      </section>
    </>
  )
}

export default About
