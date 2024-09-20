import ProcessCard from '../ProcessCard/ProcessCard'

const DesignProcess = () => {
    return (
        <div className='max-w-screen-2xl xl:mx-auto mt-[100px]'>
            <p className='mx-[22px] md:mx-[100px] text-[#FF5956]  text-[14px] leading-[18px]'>What we do</p>
            <h3 className='mx-[22px] md:mx-[100px] text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] mb-[40px] md:mb-[80px]'>Bringing Your Ideas to life with thoughtful design and user-focused solutions.</h3>
            <div className='flex flex-col px-[4px] mx-[22px] md:mx-0 md:px-0 md:items-center gap-[24px]'>
                <h2 className='text-[24px] text-center md:text-[40px] leading-[52px]'>MY DESIGN PROCESS</h2>
                <ProcessCard image="/research-icon.svg" title="Research" text="I begin by thoroughly understanding the problem, the target audience, and the market. This phase ensures that my designs are informed by real-world insights and are tailored to meet specific needs." />
                <ProcessCard image="/ideate-icon.svg" title="Ideate" text="Next, I brainstorm and develop creative solutions. This is where I explore various concepts that address the challenges identified during research, aiming to find the most effective and innovative approach" />
                <ProcessCard image="/design-icon.svg" title="Design" text="I then bring these ideas to life, focusing on creating visually appealing and user-friendly designs. Every element is crafted with care, ensuring it aligns with usability standards and the brand’s identity." />
                <ProcessCard image="/test-icon.svg" title="Testing" text="With the design in place, I conduct testing to gather feedback from real users. This step helps identify any issues and ensures that the design is intuitive and easy to use." /></div>
        </div>
    )
}

export default DesignProcess