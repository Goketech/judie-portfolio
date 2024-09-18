import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="mt-[50px] md:mt-[264px] px-[24px]" id="contact">
            <div className="flex flex-col md:place-items-end mr-[100px]">
                <div>
                    <p className="text-[#A3A3A3] text-[14px] leading-[16px] mb-[8px]">Contact</p>
                    <Link className="text-[16px] leading-[24px] text-[#FAFAFA] " href="mailto:florencekey22@gmail.com">florencekey22@gmail.com</Link>
                    <p className="mt-[24px] text-[16px] leading-[16px] mb-[8px]">Say hi</p>
                    <div className="flex gap-[16px] bg-[#0F0F0F] px-[16px] py-[8px] rounded-[300px]">
                        <Link href="https://www.linkedin.com/in/florence-eze-07049223a"><Image src="/linkedin.svg" alt="linkedin" width={32} height={32} /></Link>
                        <Link href=" https://www.behance.net/florenceeze1"><Image src="/behance.svg" alt="behance" width={32} height={32} /></Link>
                        <Link href="https://dribbble.com/janeyrexx"><Image src="/dribble.svg" alt="dribble" width={32} height={32} /></Link>
                        <Link href="mailto:florencekey22@gmail.com"><Image src="/mail.svg" alt="mail" width={32} height={32} /></Link>
                    </div>
                </div>
            </div>
            <div className="mt-[53px] md:ml-[100px] mb-[100px]">
                <p className="text-[#FAFAFA]">Looking for a Designer?</p>
                <h1 className="text-[30px] md:text-[48px] text-[#ED7377] leading-[48px] md:leading-[67px]">LET&apos;S WORK TOGETHER</h1>
            </div>
        </div>
    )
}

export default Footer