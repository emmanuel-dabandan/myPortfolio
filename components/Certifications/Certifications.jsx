"use client"
import React from 'react'
import CardContainer from '../CardContainer'
import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'

const certifications = [
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "2026"
    },
    {
        title: "Introduction to Modern AI",
        issuer: "Cisco",
        date: "2026"
    },
    {
        title: "Introduction to Data Science",
        issuer: "Cisco",
        date: "2026"
    },
    {
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        date: "2026"
    },
    {
        title: "Data Analytics Essentials",
        issuer: "Cisco",
        date: "2026"
    }
];

const Certifications = () => {
    return (
        <CardContainer>
            <div className="p-6 md:p-10 lg:p-12">
                <SectionTitle title={"Certifications"} />
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-6"
                >
                    <ul className="space-y-6 text-black/80">
                        {certifications.map((cert, index) => (
                            <li key={index}>
                                <h3 className="font-semibold text-base md:text-lg">{cert.title}</h3>
                                <p className="text-sm md:text-base">{cert.issuer} - {cert.date}</p>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </CardContainer>
    )
}

export default Certifications