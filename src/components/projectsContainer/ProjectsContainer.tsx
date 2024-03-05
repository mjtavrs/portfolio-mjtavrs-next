import ProjectCard from "../shared/projectCard/ProjectCard";

export default function ProjectsContainer() {
    return (
        <div className="flex sm:flex-col md:flex-row items-center">
            <ProjectCard
                projectTitle="Maribe Arquitetura"
                projectDesc="Maribe é um escritório de arquitetura e urbanismo baseado em Recife, Pernambuco. Seu projeto solicitava uma página de apresentação, uma página para mostrar os projetos feitos pelo escritório, além de dois formulários, um para orçamento, outro para contato. Criar esse projeto do zero, desde o design até o tratamento back-end, me possibilitou um grande aprendizado que carrego desde então."
            />
        </div>
    );
}