import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-[rgb(31,41,55)] p-8'>
                <div className=' text-[rgb(123,135,151)] grid grid-cols-4 gap-10 py-6'>
                    <div className='2/1'>
                        <h5 className='mb-3 text-white font-semibold text-lg'>AI CV Builder</h5>
                        <p>Build professional CVs with AI-powered automation.</p>
                    </div>
                    <div className='2/2'>
                        <h5 className='mb-3  text-white font-semibold text-lg'>Quick Links</h5>
                        <ul>
                            <li className='mb-3' ><a href="">Home</a></li>
                            <li className='mb-3'><a href="">Templates</a></li>
                            <li className='mb-3'><a href="">Pricing</a></li>
                            <li className='mb-3'><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='2/3'>
                        <h5 className='mb-3  text-white font-semibold text-lg'>Support</h5>
                        <ul >
                            <li className='mb-3'><a href="">Help Center</a></li>
                            <li className='mb-3'><a href="">FAQ</a></li>
                            <li className='mb-3' ><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='2/4'>
                        <h5 className='mb-3  text-white font-semibold text-lg'>Legal</h5>
                        <ul>
                            <li className='mb-3'><a href="">Privacy Policy</a></li>
                            <li className='mb-3'><a href="">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <hr className='text-[rgb(123,135,151)]' />
                <div className='text-center text-[rgb(123,135,151)] pt-6'>
                    <p >© 2025 AI CV Builder. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
