import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-auto py-3 max-w-[1400px] w-screen'>
        <div className='flex justify-between items-center gap-8'>
            <div className='h-12 w-12 rounded-full bg-primaryBlue'>

            </div>
            <ul className='flex gap-6 font-semibold cursor-pointer'>
                <li>Services</li>
                <li>Testimonials</li>
                <li></li>
            </ul>

        </div>
        <div>
            <Button/>
        </div>

    </div>
  )
}

export default Navbar