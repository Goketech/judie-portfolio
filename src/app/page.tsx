import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import DesignProcess from "@/components/DesignProcess/DesignProcess";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <DesignProcess />
      <About />
    </div>
  );
}
