'use client'

import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About Me</h2>
            
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                {/* Profile Image */}
                <div className='w-64 sm:w-80 flex-shrink-0'>
                    <Image 
                        src={assets.user_image} 
                        alt="User image" 
                        width={320} 
                        height={320} 
                        className='w-full rounded-3xl'
                        priority
                    />
                </div>
                
                {/* Content */}
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo text-gray-700'>
                        I am a passionate frontend developer and UI/UX designer with a strong background in creating visually stunning and user-friendly websites and applications. With a keen eye for design and a deep understanding of frontend technologies, I strive to deliver exceptional digital experiences that captivate users and drive business success.
                    </p>
                    
                    {/* Skills Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-10'>
                        {infoList?.map((item, index) => (
                            <div 
                                key={`${item.title}-${index}`}
                                className='border border-gray-300 rounded-lg p-6 cursor-pointer hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-all duration-500'
                            >
                                <Image 
                                    src={item.icon} 
                                    alt={item.title} 
                                    width={32} 
                                    height={32}
                                    className='w-8 h-8 mb-3'
                                />
                                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                                <p className='text-gray-600 text-sm'>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tools */}
                    <div>
                        <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                        <ul className='flex items-center gap-3 sm:gap-5'>
                            {toolsData?.map((tool, index) => (
                                <li 
                                    key={index}
                                    className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                >
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
