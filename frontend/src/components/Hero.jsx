import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='h-140 bg-[url("header-bg.png")] bg-cover bg-center relative'>
        <div className='grid grid-cols-2 gap-10 absolute p-2'>
            <div className=' h-100 w-150 mt-17 ml-3'>
                <div className='bg-white flex gap-3 px-5 py-3 rounded-4xl items-center mr-45 text-sm'>
                    <span><img className='mt-0.8' src="img-dollar.png" alt="" /></span>
                    <span>Build a professional CV in minutes. Apply automatically.</span>
                </div>
                <h1 className='font-bold text-5xl leading-14 text-[rgb(51,51,51)] px-1 py-5'>Our platform fully automated AI-powered job-applying system.</h1>
                <p className='text-white text-lg mb-5'>Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>
                <div className='flex gap-4 text-white'>
                    <button className='bg-[rgb(16,185,129)] cursor-pointer font-semibold py-2 px-5 rounded hover:bg-[rgb(12,141,98)] transition-colors duration-300 hover:-translate-y-1' >Choose Template</button>
                    <button className='bg-[rgb(16,185,129)] cursor-pointer font-semibold py-2 px-5 rounded hover:bg-[rgb(12,141,98)] transition-colors duration-300 hover:-translate-y-1'>Contact Us</button>
                </div>
            </div>
            <div></div>
        </div>

      </div>
    </>
  )
}

export default Hero
