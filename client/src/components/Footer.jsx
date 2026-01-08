import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy", path: "/privacy" },
    ];
  return (
    <>
        <div className=' block md:flex justify-between m-8'>
            <div className='md:w-1/2 w-full '>
                <section>
                    <div><img  className="mb-4" src={assets.logo} alt=""  /></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eaque autem? Ipsa earum ab placeat doloremque sequi mollitia rem?</p>
                    </div>
                </section>
            </div>
            <div className='mt-5 md:mt-2 md:ms-3 flex justify-between gap-10'>
            <section >
                <h3 className='font-bold'>Comapany</h3>
                    <ul>
                        {
                            links.map((item,index)=>(
                                <li key={index}>
                                    <NavLink onClick={()=>{scrollTo(0,0)}} to={item.path} >{item.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </section>
                    
                <section>
                    <h3 className='font-bold'>Get In Touch</h3>
                    <p>+91 7985000241</p>
                    <address>info1@gmail.com</address>
                </section>
            </div>
            
        </div>
        <hr />
        <div className='text-center p-4'>
            &copy; {new Date().getFullYear()} Hospital Management. All Right Reserved.
        </div>
    </>
  )
}

export default Footer