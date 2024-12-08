import Link from "next/link"
import AnimatedLink from "../AnimatedLinks/index"

const Nav = () => {
  return (
    <div className='flex items-center justify-between px-[50px] py-[24px] md:px-[100px] md:py-[48px]'>
        <div className='font-medium'>
          <AnimatedLink
                title="FLORENCE EZE"
                secondTitle="FLORENCE EZE"
                isLink={true}
                href="/"
          />
        </div>
        <Link href='#contact'><button className='bg-white font-medium transition-colors duration-300 hover:bg-transparent hover:text-white px-[24px] py-[8px] rounded-[300px] text-[#0C0C0C]'>Contact</button></Link>
    </div>
  )
}

export default Nav