import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      {/* <div className='text-center'>
        <Image src={assets.logo} alt='logo' className='w-36 mx-auto mb-2' width={144} height={48} />
      </div> */}

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Niko Wang. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href='https://github.com/NikoZW'>GitHub</a></li>
          <li><a target='_blank' href='https://www.linkedin.com/in/zizhuo-wang-niko/'>LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
