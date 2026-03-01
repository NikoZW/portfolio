import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)

  const sideMenuRef = useRef<HTMLUListElement>(null)

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About me', href: '#about' },
    { label: 'My Work', href: '#work' },
    { label: 'Contact Me', href: '#contact' },
  ]

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? 'bg-white/50 backdrop-blur-md shadow-lg' : ''
        }`}
      >
        {/* Left logo */}
        <a href="#top">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer" width={112} height={40} />
        </a>

        {/* Center navigation (visible on md and above) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: mobile menu button / spacer on desktop */}
        <button className="block md:hidden ml-3" onClick={openMenu} aria-label="Open menu">
          <Image src={assets.menu_black} alt="Menu icon" className="w-6" width={24} height={24} />
        </button>
        <div className="hidden md:block w-28" />

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close icon" className="w-5 cursor-pointer" width={20} height={20} />
          </div>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a onClick={closeMenu} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar

