import React from 'react'

const Custom = () => {
  return (
    <>
      <div className='custom-section  p-5'>
        <div className='custom-box py-30 px-10 grid grid-cols-[0.5fr_2fr_0.5fr] items-center gap-2'>
            <div><img className='h-25 rounded' src="custom.png"/></div>
            <div className='text-3xl text-left font-bold text-[rgb(17,24,39)]'><h2>Do you Need a Complete Custom CV Template?</h2></div>
            <div className='bg-[rgb(102,126,234)] text-center text-[white] py-3 px-1 rounded font-semibold'><a href="">Send a Request</a></div>
        </div>
      </div>
    </>
  )
}

export default Custom
