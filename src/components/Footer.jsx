import React from 'react';
import {  assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 leading-tight text-gray-600'>We’ve made healthcare accessible to millions by giving them quality care at affordable prices. Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</p>
            </div>
            <div>
                <p className='text-xl mb-5 font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl mb-5 font-medium'>GET IN TOUCH</h1>
                <p className='flex flex-col gap-2 text-gray-600'>+91 8093398226</p>
                <p className='flex flex-col gap-2 text-gray-600 mt-1'>pandeydadaodisha1998@gmail.com</p>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@Tekken-Doc - All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not process requests for Schedule and habit forming drugs.</p>
        </div>
    </div>
  )
}

export default Footer