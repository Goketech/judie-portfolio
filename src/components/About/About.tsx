import Image from "next/image"

const About = () => {
  return (
    <div className="bg-[#000000]">
      <div className="max-w-screen-xl xl:mx-auto flex flex-col lg:flex-row justify-between px-[22px] md:px-[100px] py-[50px] mt-[100px]">
        <div className="max-w-[529px] mb-[50px] lg:mb-0">
          <h5 className="text-[36px] leading-[52px] mb-[30px]">About me</h5>
          <p className="text-[16px] leading-[28px] mb-[20px]">Hello, I&apos;m Florence</p>
          <p className="text-[16px] leading-[28px] mb-[20px]">I&apos;m committed to helping companies create beautiful, usable solutions from start to finish</p>
          <p className="text-[16px] leading-[28px] mb-[20px]">With a background in visual design and user experience, I specialize in crafting intuitive and engaging digital products.</p>
          <p className="text-[16px] leading-[28px] mb-[20px]">As a ux designer, I&apos;m passionate about delivering tailored solutions for brands and startups worldwide—from building design systems to conducting user research.</p>
          <p className="text-[16px] leading-[28px]">I am currently seeking new challenges and opportunities in the field of product design.
          </p>
        </div>
        <div>
          <Image className="rounded-xl max-h-[448px]" src="/me.jpg" alt="about-image" width={431} height={448} />
        </div>
      </div>
    </div>

  )
}

export default About