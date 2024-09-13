import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="mt-[264px]" id="contact">
            <div className="flex flex-col place-items-end mr-[100px]">
                <div>
                    <p className="text-[#A3A3A3] text-[14px] leading-[16px] mb-[8px]">Contact</p>
                    <Link className="text-[16px] leading-[24px] text-[#FAFAFA] " href="mailto:florencekey22@gmail.com">florencekey22@gmail.com</Link>
                    <p className="mt-[24px] text-[16px] leading-[16px] mb-[8px]">Say hi</p>
                    <div className="flex gap-[16px] bg-[#0F0F0F] px-[16px] py-[8px] rounded-[300px]">
                        <Image src="/linkedin.svg" alt="linkedin" width={32} height={32} />
                        <Image src="/behance.svg" alt="behance" width={32} height={32} />
                        <Image src="/dribble.svg" alt="dribble" width={32} height={32} />
                        <Image src="/mail.svg" alt="mail" width={32} height={32} />
                    </div>
                </div>
            </div>
            <div className="mt-[53px] ml-[100px] mb-[100px]">
                <p className="text-[#FAFAFA]">Looking for a Designer?</p>
                <h1 className="text-[48px] text-[#ED7377] leading-[67px]">LET&apos;S WORK TOGETHER</h1>
            </div>
        </div>
    )
}

export default Footer