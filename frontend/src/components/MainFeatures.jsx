import React from 'react'

const MainFeatures = () => {
  return (
    <div className='services'>
      <div className='container p-10'>
        <div className='section-header text-center flex flex-col justify-center'>
            <div className='flex justify-center gap-1'>
              <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
              <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
              <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
              <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
              <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
              <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
              <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
            </div>
            <h2 className='text-3xl font-bold py-5'>Our Main Features</h2>
            <p className='text-gray-500 px-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        </div>
        <div className='service-grid grid grid-cols-3 gap-10 py-15 '>
            <div className='service-card flex flex-col items-center gap-4 transition-transform duration-400 text-center hover:shadow-xl hover:-translate-y-3 p-7 rounded-2xl'>
                <div className='service-icon'><img src="f1.png" alt="" /></div>
                <h6 className='font-semibold text-base text-[rgb(17,24,39)] text-center'>Proven CV Templates to increase Hiring Chance</h6>
                <p className='text-center text-[rgb(120,138,162)] text-sm'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
            </div>
            <div className='service-card flex flex-col items-center gap-4 transition-transform duration-400 text-center hover:shadow-xl hover:-translate-y-3 p-7 rounded-2xl '>
                <div className='service-icon'><img src="f2.png" alt="" /></div>
                <h6 className='font-semibold text-base text-[rgb(17,24,39)] text-center'>Creative, Modern and Clean Templates Design</h6>
                <p className='text-center text-[rgb(120,138,162)]'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
            </div>
            <div className='service-card flex flex-col items-center gap-4 transition-transform duration-400 text-center hover:shadow-xl hover:-translate-y-3 p-7 rounded-2xl'>
                <div className='service-icon'><img src="f3.png" alt="" /></div>
                <h6 className='font-semibold text-base text-[rgb(17,24,39)] text-center'>Easy and Intuitive Online CV and Resume Builder</h6>
                <p className='text-center text-[rgb(120,138,162)]'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
            </div>
            <div className='service-card flex flex-col items-center gap-4 transition-transform duration-400 text-center hover:shadow-xl hover:-translate-y-3 p-7 rounded-2xl'>
                <div className='service-icon'><img src="f4.png" alt="" /></div>
                <h6 className='font-semibold text-base text-[rgb(17,24,39)] text-center'>Free to use. Developed by hiring professionals.</h6>
                <p className='text-center text-[rgb(120,138,162)]'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
            </div>
            <div className='service-card flex flex-col items-center gap-4 transition-transform duration-400 text-center hover:shadow-xl hover:-translate-y-3 p-7 rounded-2xl'>
                <div className='service-icon'><img src="f5.png" alt="" /></div>
                <h6 className='font-semibold text-base text-[rgb(17,24,39)] text-center'>Recruiter Approved Phrases with Module Notification</h6>
                <p className='text-center text-[rgb(120,138,162)]'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
            </div>
            <div className='service-card flex flex-col items-center gap-4 transition-transform duration-400 text-center hover:shadow-xl hover:-translate-y-3 p-7 rounded-2xl'>
                <div className='service-icon'><img src="f6.png" alt="" /></div>
                <h6 className='font-semibold text-base text-[rgb(17,24,39)] text-center'>Fast Easy CV and Resume Formatting</h6>
                <p className='text-center text-[rgb(120,138,162)]'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainFeatures
