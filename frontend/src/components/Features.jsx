import React from 'react'

const Features = () => {
  return (
    <>
      <div className='main  p-5'>
        <div className='main-grid grid grid-cols-2 gap-15 py-15'>
            <div className='grid1 flex flex-col gap-5'>
                <div className='grid1/part1 flex gap-5 items-center bg-[rgb(243,244,246)] p-5 rounded-lg transition-transform duration-400 hover:-translate-y-1 hover:shadow-xl'>
                <div className='img'><img src="d1.png" className='w-18 h-15 rounded-4xl'/></div>
                <div className='content'>
                    <h3 className='font-semibold text-lg text-[rgb(51,51,51)]'>Easy Online Resume Builder</h3>
                    <p className='text-[rgb(170,146,145)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicin elit. Laudantium modi assumenda.</p>
                </div>
                </div>
                <div className='grid1/part2 flex gap-5 items-center  bg-[rgb(243,244,246)] p-5 rounded-lg transition-transform duration-400 hover:-translate-y-1 hover:shadow-xl'>
                <div className='img'><img src="d2.png" className='w-20 h-15 rounded-4xl'/></div>
                <div className='content'>
                    <h3 className='font-semibold text-lg text-[rgb(51,51,51)]'>Step by Step Expert Tips</h3>
                    <p className='text-[rgb(170,146,145)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.</p>
                </div>
                </div>
                <div className='grid1/part3 flex gap-5 items-center  bg-[rgb(243,244,246)] p-5 rounded-lg transition-transform duration-400 hover:-translate-y-1 hover:shadow-xl'>
                <div><img src="d3.png" className='w-16 h-15 rounded-4xl' /></div>
                <div className='content'>
                    <h3 className='font-semibold text-lg text-[rgb(51,51,51)]'>Recruiter Approved Phrases</h3>
                    <p className='text-[rgb(170,146,145)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi.</p>
                </div>
                </div>
            </div>
            <div className='grid2 flex flex-col gap-5 pt-9'>
                <div className='flex gap-1 justify-center pb-5'>
                <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>
                <div className='w-2 h-2 rounded-3xl bg-[rgb(16,185,129)]'></div>

                </div>
                <h2 className='text-3xl font-bold text-[rgb(51,51,51)] pb-1'>Why Choose Our Platform?</h2>
                <p className='text-sm text-[rgb(116,126,136)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                <p className='text-sm text-[rgb(116,126,136)]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
                <button className='bg-[rgb(102,126,234)] w-full text-white py-3 font-semibold rounded cursor-pointer hover:bg-[rgb(69,100,237)] transition-transform duration-300 hover:-translate-y-1'>Lets build your CV</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Features
