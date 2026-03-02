import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <Image
                src={assets.profile_img}
                alt="Profile Image"
                width={128}
                height={128}
                className='rounded-full w-32'
                priority
            />

            <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl'>
                Hi! I'm Niko Wang <Image src={assets.hand_icon} alt="Hand wave icon" width={24} height={24} className='w-6' />
            </h3>

            <h1 className='text-3xl sm:text-5xl lg:text-5xl '>
                Web Developer, Vancouver, BC

            </h1>

            <p className='max-w-2xl mx-auto text-gray-700'>
                I'm a web developer who loves crafting clean, interactive, and user-friendly experiences. Currently expanding into web development in Canada, while enjoying the journey of learning, building, and solving real-world problems ✨

            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a
                    href='#contact'
                    className='px-10 py-3 border border-white rounded-full bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-2'
                >
                    Contact Me <Image src={assets.right_arrow_white} alt="" width={16} height={16} className='w-4' />
                </a>
                <a
                    href='/resume.pdf'
                    download
                    className='px-10 py-3 border border-gray-500 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2'
                >
                    My Resume <Image src={assets.download_icon} alt="" width={16} height={16} className='w-4' />
                </a>
            </div>
        </div>
    )
}

export default Header
