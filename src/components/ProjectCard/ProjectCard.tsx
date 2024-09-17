import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  type: string;
  title: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, type, title, url }) => {
  return (
    <Link href={url}>
      <div className="group cursor-pointer w-full max-w-[532px] mx-auto">
        <div className="border border-[#333333] p-[34px] rounded-lg transition-colors duration-300 group-hover:bg-[#121212] group-hover:border-0">
          <Image className="rounded-lg" src={image} alt="design-image" width={464} height={469} />
        </div>
        <p className="mt-[20px] text-[14px] leading-16px] text-[#a6a6a6] mb-[4px]">{type}</p>
        <p className="leading-[24px]">{title}</p>
      </div>
    </Link>
  )
}

export default ProjectCard