"use client"
import React from 'react'
import { DecoderText } from './decoder-text'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <div className='grid place-content-center h-screen'>
            <div className='text-[clamp(14px,2.2vw,22px)] font-medium text-black/60 tracking-wider h-11 pb-3'>
                <DecoderText text={"EMMANUEL DABANDAN"} delay={500} />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className='flex items-center gap-1 '>
                    <div className='text-[clamp(32px,8vw,100px)] font-medium text-black/90 leading-[100%] whitespace-nowrap'>Virtual</div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        style={{ transformOrigin: "left" }}
                        className="md:h-0.5 h-[1px] bg-black/30 w-full max-w-72"
                    />
                </div>
                <div className='text-[clamp(32px,8vw,100px)] font-medium text-black/90 leading-[100%]'>&nbsp; Assistant</div>
            </motion.div>
        </div>
    )
}

export default HeroSection