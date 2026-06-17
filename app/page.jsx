import StorySection from '@/components/StorySection'
import Education from '@/components/Education/Education'
import Certifications from '@/components/Certifications/Certifications'
import Experience from '@/components/experience/Experience'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Project from '@/components/Projects/Project'
import Skills from '@/components/skills/Skills'
import Tools from '@/components/skills/Tools'
import ThankYou from '@/components/ThankYou/ThankYou'

const HomePage = () => {

    return (
        <div className='max-h-screen grid md:grid-cols-[66%_auto] gap-7.5 overflow-y-auto p-4 pb-8 md:pb-10 md:pr-20 auto-rows-max'>
            <div className='col-span-full'>
                <HeroSection />
                <StorySection />
            </div>
            <div className='grid gap-7.5 h-fit'>
                <Experience />
                <Education />
                <Certifications />
            </div>
            <div className='grid gap-7.5 h-fit'>
                <Skills />
                <Tools />
            </div>
            <div className='col-span-full flex flex-col gap-10 md:gap-20 pt-4 md:pt-0'>
                <Project />
                <ThankYou />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage
