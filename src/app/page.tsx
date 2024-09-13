import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import DesignProcess from "@/components/DesignProcess/DesignProcess";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <DesignProcess />
    </div>
  );
}
