import Image from "next/image";

interface ProjectCardProps {
    image: string;
    text: string;
    title: string;
}
const ProcessCard: React.FC<ProjectCardProps> = ({image, text, title}) => {
  return (
    <div className="bg-[#131313] p-[24px] radius-lg md:w-[600px]">
        <Image src={image} alt="icon" width={64} height={64} />
        <h5 className="mt-[24px] font-medium text-[22px] leading-[30px] mb-[8px]">{title}</h5>
        <p className="text-[#d9d9d9] max-w-[541px]">{text}</p>
    </div>
  )
}

export default ProcessCard