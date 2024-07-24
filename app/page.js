import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Carrer from "@/components/Carrer";
import ClintReview from "@/components/ClintReview";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import LinkSection from "@/components/LinkSection";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() { 
  
  return (
   <main id="t1" className="">
   <Header />
   <HomeSection id="HomeSection" />
   <ServiceSection id="ServiceSection"  />
   <AboutSection id="AboutSection"/>
   <LinkSection id="LinkSection"/>
   <Carrer id="Carrer"/>
   <ProjectSection id="ProjectSection"/> 
   <ClintReview  id="ClintReview"/> 
   <BlogSection  id="BlogSection"/>  
   <ContactSection  id="ContactSection"/> 
   <FooterSection id="FooterSection"/>
   
   
   
   
   </main>
  );
}
