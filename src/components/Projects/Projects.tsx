import ProjectCard from "../ProjectCard/ProjectCard"

const Projects = () => {
  return (
    <div className="mt-[100px]">
        <h2 className="mb-[52px] text-center text-[36px] leading-48px]">EXPLORE A SELECTION OF CRAFTED WORK, <br />DESIGNED FROM SCRATCH</h2>
        <div className="grid grid-cols-2 mx-[100px] gap-x-[24px] gap-y-[40px]">
            <ProjectCard url="/work/shop-easy" image="/image1.jpg" title="Shop Easy" type="Mobile App Design" />
            <ProjectCard url="/work/letters-app" image="/image2.jpg" title="Letters App" type="Mobile App Design" />
            <ProjectCard url="/work/the-garage" image="/image3.jpg" title="The Garage" type="Mobile Design" />
            <ProjectCard url="/work/carter-shop" image="/image4.jpg" title="Carter Shop" type="Mobile Design" />
            <ProjectCard url="/work/vita-care" image="/image5.jpg" title="Vita Care" type="Website Design" />
            <ProjectCard url="/work/telex" image="/image6.jpg" title="Telex" type="Webapp Design" />
        </div>
    </div>
  )
}

export default Projects