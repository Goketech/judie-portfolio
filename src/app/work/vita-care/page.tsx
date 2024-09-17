import Image from "next/image"
import Link from "next/link"

function Work() {
    return (
        <div className="mx-[22px] md:mx-[100px]">
            <Link href="/">
                <div className="cursor-pointer border border-[#333333] p-[12px] rounded-[8px] w-[56px] mb-[40px]">
                    <Image src="/arrow-left.svg" alt="arrow" width={32} height={32} />
                </div>
            </Link>
            <p className="text-[14px] leading-[21px] text-[#d9d9d9] mb-[4px]">Website Design</p>
            <h1 className="text-[32px] leading-[38px] font-medium">Vita Care Web App</h1>
            <p className="text-[#d9d9d9] text-[20px] leading-[32px] max-w-[814px] mt-[16px] mb-[32px]">Vitacare is a start up company founded with the vision to simplify healthcare. Vitacare is looking to build a web app that will help connect healthcare specialists with users online without the hassle of standing in long queues.
                To develop a mobile app that enables users to efficiently find, compare, select, and contact healthcare practitioners</p>
            <div className="flex gap-[44px]">
                <div className="flex flex-col gap-[4px]">
                    <h5 className="text-[18px] font-medium leading-[26px]">Design Process</h5>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">Ux Research</p>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">Ui Design</p>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">Competitor analysis</p>
                </div>
                <div className="flex flex-col gap-[4px]">
                    <h5 className="text-[18px] font-medium leading-[26px]">Tools Used</h5>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">Figma</p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-[100px] gap-[40px]">
                <div className="border border-[#333333] p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/vita-care-1.jpg" alt="vita-care" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/vita-care-2.jpg" alt="vita-care" width={708} height={477} />
                </div>
            </div>
        </div>
    );
}

export default Work;