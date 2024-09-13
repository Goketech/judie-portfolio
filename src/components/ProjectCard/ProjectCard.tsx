import Image from "next/image";

interface ProjectCardProps {
    image: string;
    type: string;
    title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({image, type, title}) => {
  return (
    <div>
        <div className="border border-[#333333] p-[34px] rounded-lg">
            <Image className="rounded-lg" src={image} alt="design-image" width={464} height={469} />
        </div>
        <p className="mt-[20px] text-[14px] leading-16px] text-[#a6a6a6] mb-[4px]">{type}</p>
        <p className="leading-[24px]">{title}</p>
    </div>
  )
}

export default ProjectCard