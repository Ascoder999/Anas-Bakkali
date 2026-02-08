import MainHeader from "@/components/MainHeader";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import { Contact } from "@/components/Contact";
import Button from "@/components/SocialBTN"
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <MainHeader />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
      <Button />
      <Footer />
    </>
  );
}
