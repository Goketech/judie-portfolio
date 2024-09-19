import Image from "next/image"
import Link from "next/link"

function Work() {
    return (
        <div className="mx-[22px] md:mx-[100px]">
            <Link href="/">
                <div className="cursor-pointer border border-[#333333] bg-[#1a1a1a] transition-colors duration-300 hover:bg-transparent p-[12px] rounded-[8px] w-[56px] mb-[40px]">
                    <Image src="/arrow-left.svg" alt="arrow" width={32} height={32} />
                </div>
            </Link>
            <p className="text-[14px] leading-[21px] text-[#d9d9d9] mb-[4px]">Website Design</p>
            <h1 className="text-[32px] leading-[38px] font-medium">Carter Shop</h1>
            <p className="text-[#d9d9d9] text-[20px] leading-[32px] max-w-[814px] mt-[16px] mb-[32px]">Design a simple and user-friendly online store, focusing on a fast and streamlined shopping experience. This will be a single-seller platform showcasing products and checkout experience.</p>
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
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/carter-shop-1.jpg" alt="carter-shop" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/carter-shop-2.jpg" alt="carter-shop" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/carter-shop-3.jpg" alt="carter-shop" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/carter-shop-4.jpg" alt="carter-shop" width={708} height={477} />
                </div>
                <div className="border border-[#333333] p-[16px] md:p-[60px] rounded-[12px] transition-colors duration-300 hover:bg-[#121212] hover:border-0">
                    <Image src="/carter-shop-5.jpg" alt="carter-shop" width={708} height={477} />
                </div>
            </div>
        </div>
    );
}

export default Work;