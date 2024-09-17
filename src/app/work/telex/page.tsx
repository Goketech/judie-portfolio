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
            <p className="text-[14px] leading-[21px] text-[#d9d9d9] mb-[4px]">Webapp Design</p>
            <h1 className="text-[32px] leading-[38px] font-medium">Telex</h1>
            <p className="text-[#d9d9d9] text-[20px] leading-[32px] max-w-[814px] mt-[16px] mb-[32px]">Telex is an application that ensures timely and accurate delivery of notifications for developers and IT teams. Similar to Slack, Telex allows users to organize notifications into different channels, such as new customer sign-ups, customer complaints, and purchases.</p>
            <div className="flex gap-[44px]">
                <div className="flex flex-col gap-[4px]">
                    <h5 className="text-[18px] font-medium leading-[26px]">Design Process</h5>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">Ux Research</p>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">Ui Design</p>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">Competitor analysis</p>
                </div>
                <div className="flex flex-col gap-[4px]">
                    <h5 className="text-[18px] font-medium leading-[26px]">Project</h5>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">ongoing</p>
                    <p className="text-[16px] leading-[26px] text-[#d9d9d9]">team work</p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-[100px] gap-[40px]">
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/telex-1.jpg" alt="telex" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/telex-2.jpg" alt="telex" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/telex-3.jpg" alt="telex" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/telex-4.jpg" alt="telex" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/telex-5.jpg" alt="telex" width={708} height={477} />
                </div>
            </div>
        </div>
    );
}

export default Work;