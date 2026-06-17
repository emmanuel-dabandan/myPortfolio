import evallo from "../assets/evallo-logo.png"
import cvsu  from "../assets/cvsulogo.png"
import djprshs from "../assets/djprshslogo.png"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiTrello,
  SiSlack,
  SiGoogle,
  SiGooglesheets,
  SiTableau,
  SiNotion,
  SiShopify,
  SiLoom,
  SiPostgresql,
  SiKotlin,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiVite,

} from "react-icons/si";
import { FaMicrosoft, FaFileExcel } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { LuUtensilsCrossed } from "react-icons/lu";

const FigmaIcon = () => {
  return (
    <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.12856 25C6.40752 25 8.25711 23.1334 8.25711 20.8334V16.6669H4.12856C1.84959 16.6669 0 18.5335 0 20.8334C0 23.1334 1.84959 25 4.12856 25Z" fill="#23C881" />
      <path d="M0 12.4997C0 10.1998 1.84959 8.33313 4.12856 8.33313H8.25711V16.6663H4.12856C1.84959 16.6663 0 14.7997 0 12.4997Z" fill="#9C5DF4" />
      <path d="M0.00115967 4.16658C0.00115967 1.86663 1.85075 0 4.12972 0H8.25827V8.33317H4.12972C1.85075 8.33317 0.00115967 6.46654 0.00115967 4.16658Z" fill="#F04F2B" />
      <path d="M8.25781 0H12.3864C14.6653 0 16.5149 1.86663 16.5149 4.16658C16.5149 6.46654 14.6653 8.33317 12.3864 8.33317H8.25781V0Z" fill="#FD7366" />
      <path d="M16.5149 12.4997C16.5149 14.7997 14.6653 16.6663 12.3864 16.6663C10.1074 16.6663 8.25781 14.7997 8.25781 12.4997C8.25781 10.1998 10.1074 8.33313 12.3864 8.33313C14.6653 8.33313 16.5149 10.1998 16.5149 12.4997Z" fill="#2AB3EE" />
    </svg>
  )
}

const GHLIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 22h20L12 2z" fill="#188BF6" />
    </svg>
  )
}

export const skills = {
  tech: [
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
    { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    { name: "Pandas", Icon: SiPandas, color: "#150458" },
    { name: "NumPy", Icon: SiNumpy, color: "#013243" },
    { name: "Vite", Icon: SiVite, color: "#646CFF" },
  ],

  tools: [
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
    { name: "Figma", Icon: FigmaIcon, color: "#F24E1E" },
    { name: "Microsoft Workspace", Icon: FaMicrosoft, color: "#00A4EF" },
    { name: "Slack", Icon: SiSlack, color: "#4A154B" },
    { name: "Teams", Icon: PiMicrosoftTeamsLogoFill, color: "#6264A7" },
    { name: "Google Sheets", Icon: SiGooglesheets, color: "#34A853" },
    { name: "Tableau", Icon: SiTableau, color: "#E97627" },
    { name: "Excel", Icon: FaFileExcel, color: "#217346" },
    { name: "Notion", Icon: SiNotion, color: "#000000" },
    { name: "GHL", Icon: GHLIcon, color: "#188BF6" },
    { name: "Shopify", Icon: SiShopify, color: "#95BF47" },
    { name: "Loom", Icon: SiLoom, color: "#625DF5" },
    { name: "Google Workspace", Icon: SiGoogle, color: "#4285F4" },

  ],
};

export const experience = [
  {
    "orgName": "Majesty Coffee",
    "logo": [],
    "role": "E-commerce Virtual Assistant",
    "duration": "April 2025 - April 2026",
    "desc": [    ]
  },
  {
    "orgName": "iQor Philippines",
    "logo": [], 
    "role": "Customer Service Representative",
    "duration": "July 2024 - April 2025",
    "desc": [    ]
  }
]

export const projects = [
  {
    "name": "E-Commerce Tracker",
    "about": "e-commerce financial tracking system centralizes raw operational data to provide real-time visibility into revenue, expenses, and profit margins, featuring a brand-aligned, fully sanitized user interface designed",
    "logo": LuUtensilsCrossed,
    "techStack": "Google Sheets",
    "desc": [    ],
    "url": "https://docs.google.com/spreadsheets/d/1DWPK5wM4Mfs4S1Lh3JoKAbpfD_lvfFqZ3jCrB0n1Kak/edit?usp=sharing"
  },
  {
    "name": "Personal Portfolio Website",
    "about": "A personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects, skills, and experience in a visually appealing and responsive design.",
    "logo": LuUtensilsCrossed,
    "techStack": "Next.js, Tailwind CSS",
    "desc": [    ]
  },
  {
    "name": "Bestpresso",
    "about": "Mockup project is a premium mobile e-commerce application designed to provide coffee enthusiasts with a seamless, high-end experience for customizing and purchasing professional-grade espresso machines and barista accessories.",
    "logo": LuUtensilsCrossed,
    "techStack": "Figma",
    "desc": [    ],
    "url": "https://www.figma.com/design/fqsyqREHxwcL3mtIhVDdaU/Bestpresso?node-id=0-1&t=o0pMvdoBV1LXhakt-1"
  },
  {
    "name": "Apparel E-commerce Website",
    "about": "A B2B apparel wholesale platform featuring bulk pricing tiers, automated inventory management, and integrated order tracking.",
    "logo": LuUtensilsCrossed,
    "techStack": "React.js, FastAPI, PostgreSQL",
    "desc": [    ],
    "url": "https://b2b-apparel-frontend.vercel.app/"
  },
  {
    "name": "E-Commerce P&L and Dashboard",
    "about": "A comprehensive financial tracking system for e-commerce businesses, centralizing raw operational data to provide real-time visibility into revenue, expenses, and profit margins, featuring a brand-aligned, fully sanitized user interface designed for non-technical users.",
    "logo": LuUtensilsCrossed,
    "techStack": "Google Sheets",
    "desc": [    ],
    "url": "https://docs.google.com/spreadsheets/d/1xg6djaz31tqIqsjn-PBUH_qLOXeBJYfUNJZLBGA31vM/edit?usp=sharing"
  },
  {
    "name": "Lift & Grip Gym Management System",
    "about": "A comprehensive gym management system designed to streamline operations, track member progress, and optimize facility utilization.",
    "logo": LuUtensilsCrossed,
    "techStack": "Kotlin, Jetpack Compose, Firebase",
    "desc": [    ],
    "url": "https://drive.google.com/drive/folders/1ZyKiS4rw0jmX9bq94HTu5MJPs9K4-Wkg?usp=sharing"
  }
]

export const education = [
  {
    course: "Information Technology",
    degree: "Bachelor's",
    university: "Cavite State University - Silang Campus, Philippines",
    duration: "2023 - 2026",
    logo: cvsu
  },
  {
    course: "Computer System Servicing",
    degree: "Senior High School",
    university: "Dr. Jose P. Rizal Senior High School, Philippines",
    duration: "2021 - 2023",
    logo: djprshs
  },
]
