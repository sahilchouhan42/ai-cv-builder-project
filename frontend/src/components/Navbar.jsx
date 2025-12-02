import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='h-18 bg-[rgb(25,42,86)] p-1 sticky z-50 top-0 '>
        <nav className='flex justify-between bg-[rgb(25,42,86)]  mx-6 '>
            <a href="" className='mt-4.5 text-xl text-white font-bold hover:text-[#10b981] hover:underline'>AI CV Builder</a>
            <div className='flex gap-5 items-center mt-2'>
                <ul className='flex gap-10 items-center text-white font-semibold mr-3 '>
                    <li> <a className=' hover:text-[#10b981] hover:underline' href="">Home</a></li>
                    <li> <a className=' hover:text-[#10b981] hover:underline' href="">About Us</a></li>
                    <li> <a className=' hover:text-[#10b981] hover:underline' href="">Pricing</a></li>
                    <li> <a className=' hover:text-[#10b981] hover:underline' href="">Templates</a></li>
                    <li> <a className=' hover:text-[#10b981] hover:underline' href="">Contact</a></li>
                </ul>
                <button className='text-white font-semibold cursor-pointer bg-[rgb(102,126,234)] px-6 py-3 rounded  hover:bg-[rgb(87,114,236)]'>Log in</button>
                <button className='text-white font-semibold cursor-pointer bg-[rgb(102,126,234)] px-6 py-3 rounded'>Sign Up</button>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
