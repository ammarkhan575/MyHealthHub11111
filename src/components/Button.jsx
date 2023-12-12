import React from 'react'

const Button = ({text='Log in'}) => {
  return (
    <div className='bg-black px-7 py-3 text-white rounded-full font-semibold'>
        {text}
    </div>
  )
}

export default Button