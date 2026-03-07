"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sideMenuRef = useRef<HTMLUListElement>(null);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About me", href: "#about" },
    { label: "My Work", href: "#work" },
    { label: "Contact Me", href: "#contact" },
  ];

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 
          ${isScroll ? "bg-white/50 dark:bg-gray-950/50 backdrop-blur-md shadow-lg dark:shadow-gray-900/20" : ""}`}
      >
        {/* Left logo */}
        <a href="#top">
          <Image
            src={mounted && resolvedTheme === "dark" ? assets.logo_night : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer"
            width={112}
            height={40}
          />
        </a>

        {/* Center navigation (visible on md and above) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white dark:bg-gray-800/80 shadow-sm bg-opacity-50">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="dark:text-gray-200 hover:opacity-80">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: theme toggle + mobile menu button / spacer on desktop */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label={resolvedTheme === "dark" ? "切换到浅色模式" : "切换到黑夜模式"}
            >
              {resolvedTheme === "dark" ? (
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          )}
          <button
            className="block md:hidden ml-1"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image
              src={assets.menu_black}
              alt="Menu icon"
              className="w-6 cursor-pointer dark:invert"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="hidden md:block w-28" />
        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-900 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close icon"
              className="w-5 cursor-pointer dark:invert"
              width={20}
              height={20}
            />
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
  );
};

export default Navbar;
