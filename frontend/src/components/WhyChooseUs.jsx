import React from 'react'

const WhyChooseUs = () => {
  return (
    <>
      <div className=' py-20 px-5'>
        <div className='main grid grid-cols-2 gap-35'>
            <div className='main1 flex flex-col gap-8 mt-17'>
                <div className='dots flex flex-row gap-1 justify-center'>
                    <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                    <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                    <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                    <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                    <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                    <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                    <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                </div>
                <h2 className='text-[rgb(51,51,51)] font-bold text-3xl'>We Deliver The Best</h2>
                <ul className='flex flex-col gap-4 text-[rgb(67,53,48)] text-base'>
                    <li className='flex flex-row gap-3 items-center'><img src="check.png"/><span>Proven CV Templates to increase Hiring Chance</span></li>
                    <li className='flex flex-row gap-3 items-center'><img src="check.png"/><span>Creative and Clean Templates Design</span></li>
                    <li className='flex flex-row gap-3 items-center'><img src="check.png"/><span>Easy and Intuitive Online CV Builder</span></li>
                    <li className='flex flex-row gap-3 items-center'><img src="check.png"/><span>Free to use. Developed by hiring professionals.</span></li>
                    <li className='flex flex-row gap-3 items-center'><img src="check.png"/><span>Fast Easy CV and Resume Formatting</span></li>
                    <li className='flex flex-row gap-3 items-center'><img src="check.png"/><span>Recruiter Approved Phrases.</span></li>
                </ul>
            </div>
            <div className='main2'>
                <img className='h-120' src="cv.png"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
