import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiGithub, FiLinkedin, } from "react-icons/fi";
import { RiTwitterXFill } from 'react-icons/ri'
import logo from "../assets/MG_W.jpg"

const Navbar = ({ toggle, setToggle }) => {
    const closeMobileNavbar = () => {
        setToggle?.(false)
    }

    return (
        <div className={`
    h-full py-15 fixed inset-0 z-40 pl-4
    transition-all duration-300 ease-in-out
    ${toggle ? "opacity-100 translate-x-0 bg-white/30 backdrop-blur-lg" : "opacity-0 -translate-x-full pointer-events-none"}
    md:static md:inset-auto md:z-auto md:pl-0
    md:opacity-100 md:translate-x-0 md:pointer-events-auto
    md:bg-transparent md:backdrop-blur-none md:block
  `}>
            <div className='flex flex-col justify-between items-center border border-white bg-white/40 w-fit h-full md:mx-auto rounded-[30px] pt-2.5 pb-4'>
                <Link href={"/"} onClick={closeMobileNavbar} className='h-11 w-11 rounded-full overflow-hidden hover:scale-110 transition-all duration-200 cursor-pointer block'>
                    <Image className='w-full h-full' src={logo} alt='logo' />
                </Link>
                <div className='flex items-center flex-col gap-20 text-[16px] leading-[100%] text-black font-medium'>
                    <Link onClick={closeMobileNavbar} className='-rotate-90 opacity-80 hover:opacity-100' href={"/"}>Home</Link>
                    <Link onClick={closeMobileNavbar} className='-rotate-90 opacity-80 hover:opacity-100' href={"/resume"}>Resume</Link>
                    <Link onClick={closeMobileNavbar} className='-rotate-90 opacity-80 hover:opacity-100' href={"mailto:emmanueldabandan2004@gmail.com"}>Contact</Link>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <Link onClick={closeMobileNavbar} href={"https://github.com/emmanuel-dabandan"} target='_blank' className='opacity-80 hover:opacity-100'>
                        <FiGithub size={24} />
                    </Link>
                    <Link onClick={closeMobileNavbar} href={"https://www.linkedin.com/in/emmanuel-dabandan/"} target='_blank' className='opacity-80 hover:opacity-100'>
                        <FiLinkedin size={24} />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
