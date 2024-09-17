import Link from "next/link"

const Nav = () => {
  return (
    <div className='flex items-center justify-between px-[50px] py-[24px] md:px-[100px] md:py-[48px]'>
        <div className='font-medium'>FLORENCE EZE</div>
        <Link href='#contact'><button className='bg-white px-[24px] py-[8px] rounded-[300px] text-[#0C0C0C]'>Contact</button></Link>
    </div>
  )
}

export default Nav