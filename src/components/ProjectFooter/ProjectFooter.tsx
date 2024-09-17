import Link from "next/link"

const ProjectFooter = ({url} : any) => {
  return (
    <div>
        <div className="flex flex-col items-center mt-[100px] mb-[100px]">
            <h2 className="text-[32px] font-medium leading-[48px]">View full case study</h2>
            <Link href={url}><button className="bg-[#222222] border border-white px-[16px] py-[12px] rounded-[300px] mt-[24px] text-[#FAFAFA]">view casestudy</button></Link>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mx-[24px] md:mx-[100px] mb-[50px]">
            <div className="mb-[24px] md:mb-0">
                <p className="text-[#FAFAFA] text-[16px] leading-[20px]">Looking for a Designer?</p>
                <h3 className="text-[#ED7377] text-[30px] md:text-[48px] font-normal leading-[48px] md:leading-[67px]">LET&apos;S WORK TOGETHER</h3>
            </div>
            <Link href="mailto:florencekey22@gmail.com"><button className="rounded-[300px] px-[24px] py-[8px] bg-white text-[#0C0C0C] text-[14px] leading-[20px]">CONTACT</button></Link>
        </div>
    </div>
  )
}

export default ProjectFooter