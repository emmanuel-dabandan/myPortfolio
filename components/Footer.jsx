import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t border-[#CCCCCC] w-full font-light text-[12px] leading-none text-[#626161] flex flex-col md:flex-row gap-3 items-center justify-between pt-4'>
            <div className='flex items-center gap-4'>
                <Link href={"https://github.com/emmanuel-dabandan"} target='_blank'>GitHub</Link>
                <Link href={"https://www.linkedin.com/in/emmanuel-dabandan/"} target='_blank'>LinkedIn</Link>
            </div>
        </div>
    )
}

export default Footer