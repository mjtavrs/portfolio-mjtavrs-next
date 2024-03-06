import CertificationsContainer from "@/components/certificationsContainer/CertificationsContainer";
import TechnologiesContainer from "@/components/tenchnologiesContainer/technologiesContainer";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import Services from "@/components/services/Services";
import Section from "@/components/section/Section";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Section
        sectionId="skills"
        sectionTitle="Skills"
        sectionDesc="Conheça meu leque de habilidades e veja se corresponde ao que você procura."
      >
        <TechnologiesContainer />
      </Section>
      <Section
        sectionId="projects"
        sectionTitle="Projetos"
        sectionDesc="Abaixo você poderá ver os projetos que desenvolvi na minha jornada de tecnologia."
      >
        <ProjectsContainer />
      </Section>
      <Section
        sectionId="certifications"
        sectionTitle="Certificações"
        sectionDesc="Aqui você poderá conhecer minhas certificações, além de uma breve explicação sobre as mesmas."
      >
        <CertificationsContainer />
      </Section>
      <p>certificações virão aqui</p>
      <p>formulário de contato rápido vem aqui</p>
      <Footer />
    </>
  );
}
