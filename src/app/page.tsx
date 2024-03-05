import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Section from "@/components/section/Section";
import TechnologiesContainer from "@/components/tenchnologiesContainer/technologiesContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section
        sectionId="skills"
        sectionTitle="Skills"
        sectionDesc="Conheça meu leque de habilidades e veja se corresponde ao que você procura."
      >
        <TechnologiesContainer />
      </Section>
      <p>projetos virão aqui</p>
      <p>projetos</p>
      <p>formulário de contato rápido</p>
      <Footer />
    </>
  );
}
