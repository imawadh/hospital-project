import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <>
    <div>
      <h3 className='text-center text-2xl'>CONTACT <span className='font-bold'>US</span></h3>
    </div>
    <div className='block m-8 md:flex gap-8'>
      <div className='md:w-1/2'>
        <img src={assets.contact_image} alt="" 
        className='w-full h-auto lg:max-w-100 flex  justify-self-end rounded'/>
      </div>
      <div className='md:w-1/2 mt-8 md:mt-0 flex items-center justify-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi eius impedit dolores in! Architecto vel iusto hic illum eius consequatur recusandae ut, nostrum esse ipsum neque at reiciendis optio!
      </div>
    </div>
    </>
  )
}

export default Contact