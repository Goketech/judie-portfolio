import Link from "next/link"

const ProjectFooter = () => {
  return (
    <div>
        <div className="flex mt-[100px] flex-col md:flex-row md:items-center justify-between mx-[24px] md:mx-[100px] mb-[50px]">
            <div className="mb-[24px] md:mb-0">
                <p className="text-[#FAFAFA] text-[16px] leading-[20px]">Looking for a Designer?</p>
                <h3 className="text-[#ED7377] text-[30px] md:text-[48px] font-normal leading-[48px] md:leading-[67px]">LET&apos;S WORK TOGETHER</h3>
            </div>
            <Link href="mailto:florencekey22@gmail.com"><button className="rounded-[300px] px-[24px] py-[8px] bg-white transition-colors duration-300 hover:bg-transparent hover:text-white text-[#0C0C0C] text-[14px] leading-[20px]">CONTACT</button></Link>
        </div>
    </div>
  )
}

export default ProjectFooter