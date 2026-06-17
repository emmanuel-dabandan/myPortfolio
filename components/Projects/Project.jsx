import React from 'react'
import SectionTitle from '../SectionTitle'
import CardContainer from '../CardContainer'
import Image from 'next/image'
import { projects } from '@/app/myBio'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

const ProCard = ({ pro }) => {
    // Safely handle techStack whether it's an array or a comma-separated string
    const techArray = Array.isArray(pro.techStack) 
        ? pro.techStack 
        : (typeof pro.techStack === 'string' ? pro.techStack.split(',').map(t => t.trim()) : []);

    const cardContent = (
        <CardContainer>
            <div className="p-7 pb-8 grid gap-4 h-full content-start rounded-3xl transition-all duration-300 group-hover:bg-blue-50/60 group-hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]">
                <div>

                    {/* Role */}
                    <div className='flex items-baseline gap-2 group-hover:text-blue-500 transition-colors duration-300 w-fit'>
                        <div className="font-medium text-[clamp(14px,1.8vw,18px)] leading-tight text-[#0A0614] pt-2">
                            {pro.name}
                        </div>
                        {pro.url && <FiExternalLink />}
                    </div>

                    {/* Org + Duration */}
                    <div className="font-normal text-[clamp(13px,1.7vw,15px)] leading-tight text-[#6A6F8E] flex items-center gap-2 pt-1">
                        {pro.about}
                        {/* <span className="font-light text-[clamp(10px,1.4vw,12px)] pt-0.5">|</span> */}
                        {/* {exp.duration} */}
                    </div>
                </div>

                {/* Description */}
                <div className="grid gap-2 md:gap-3">
                    {pro.desc?.map((item, i) => (
                        <div className="flex items-start gap-2" key={i}>
                            <div className="font-light text-[clamp(12px,1.6vw,14px)] leading-tight text-[#0A0614]">
                                –
                            </div>
                            <div className="font-light text-[clamp(14px,1.9vw,16px)] leading-snug text-[#0A0614]/80">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                {techArray.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-2 mt-auto">
                        {techArray.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-black/5 text-[#6A6F8E] text-[clamp(11px,1.2vw,13px)] font-medium rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </CardContainer>
    );

    if (pro.url) {
        return (
            <Link href={pro.url} target='_blank' className="block h-full group hover:-translate-y-1.5 transition-transform duration-300">
                {cardContent}
            </Link>
        );
    }

    return (
        <div className="block h-full group hover:-translate-y-1.5 transition-transform duration-300">
            {cardContent}
        </div>
    );
}

const Project = () => {
    return (
        <div className='grid gap-4 h-fit'>
            <SectionTitle title={"Personal Projects"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((pro) => <ProCard pro={pro} key={pro.name} />)}
            </div>
        </div>
    )
}

export default Project