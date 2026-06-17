"use client"
import React from 'react'
import CardContainer from './CardContainer'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

const StorySection = () => {
    return (
        // [MODIFIED] Changed to flex and min-h-screen for better vertical centering and responsiveness 
        // that handles the new, larger card content.
        <div className='flex items-center justify-center min-h-screen p-4 md:p-8'>
            <CardContainer>
                {/* [MODIFIED] Turn this div into a grid. 
                    - Starts as 1 column on mobile.
                    - Becomes 2 columns on medium screens (md:grid-cols-2).
                    - items-start ensures the columns align to the top.
                    - Responsive gaps added for spacing between columns. */}
                <div className="p-6 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                    
                    {/* [NEW] A container for the left column (Text & Title) */}
                    <div className="flex flex-col">
                        <SectionTitle title={"My Story"} />
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                            // [MODIFIED] Removed max-w-3xl so the grid column dictates the text width.
                            className="mt-6 text-black/80 text-base md:text-lg"
                        >
                            <p>
                                Hello! I'm Emmanuel Dabandan, a passionate Virtual Assistant dedicated to helping businesses thrive through top-tier e-commerce customer support and data-driven roles. Driven to bridge the gap between classroom theory and real-world application, I began my career early at 19, right after my first year as an Information Technology student. I built a resilient foundation during my nine months as a telecommunications Customer Service Representative, where I honed my ability to solve complex technical problems under pressure and manage client relationships effectively.                            </p>
                            <p className="mt-4">
                                Eager to expand my business acumen, I transitioned to the dynamic e-commerce sector in April 2025 with Majesty Coffee, a dropshipping company. For a year, I operated directly within their financial and operational backend, taking on responsibilities like auditing profit margins and reconciling supplier invoices. This immersive experience with real-world business tools showed me the inner workings of scalable operations and sparked a deep curiosity about how data directly influences business growth and strategy.                            </p>
                            <p className="mt-4">
                                Today, I am fully focused on blending my customer support expertise with my growing analytical skills. Alongside my university studies, I am proactively upskilling through Cisco Networking Academy’s Data Science Essentials course and working hands-on with tools like Python, Pandas, and Tableau. Whether I am supporting e-commerce customers or analyzing backend metrics, I am excited to bring my technical aptitude, early professional experience, and drive for problem-solving to your team.                            </p>
                            </motion.div>
                    </div>

                    {/* [NEW] The right column placeholder for your image */}
                    {/* - md:aspect-[3/4] gives a profile-like vertical aspect ratio on larger screens.
                        - aspect-square for mobile-first.
                        - rounded-3xl matches the card container's aesthetic.
                        - Stylized with a subtle border and placeholder text. */}
                    <div className="flex flex-col items-center justify-center w-full aspect-square md:aspect-[3/4] bg-gray-100/50 rounded-3xl border-2 border-dashed border-gray-200">
                         {/* Content of the placeholder */}
                         <div className='flex flex-col items-center text-gray-400 text-center'>
                            <img src="Picture.jpeg" alt="Profile Placeholder" className='w-full h-full object-cover rounded-3xl' />
                         </div>
                    </div>

                </div>
            </CardContainer>
        </div>
    )
}

export default StorySection