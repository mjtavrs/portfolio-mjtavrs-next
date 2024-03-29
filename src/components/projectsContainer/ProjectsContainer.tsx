/* eslint-disable react/jsx-key */
import ProjectCard from "../shared/projectCard/ProjectCard";

import { DiPhp, DiJavascript1 } from "react-icons/di";
import { FaSass, FaGitAlt } from "react-icons/fa6";

export default function ProjectsContainer() {
    return (
        <div className="flex sm:flex-col md:flex-row flex-wrap gap-10 items-center">
            <ProjectCard
                projectCover={"/assets/projects/maribe.png"}
                technologiesUsed={[<DiJavascript1 />, <FaSass />, <DiPhp />, <FaGitAlt />]}
                projectTitle="Maribe Arquitetura"
                projectDesc="Maribe é um escritório de arquitetura e urbanismo baseado em Recife, Pernambuco. Seu projeto solicitava uma página de apresentação, uma página para mostrar os projetos feitos pelo escritório, além de dois formulários, um para orçamento, outro para contato. Criar esse projeto do zero, desde o design até o tratamento back-end, me possibilitou um grande aprendizado que carrego desde então."
                projectRepoPrivacy={true}
                projectRepoLink="#"
                projectRepoTitle="Maribe Arquitetura"
                projectDeployLink="https://maribe.arq.br"
            />
            <ProjectCard
                projectCover={"/assets/projects/maribe.png"}
                technologiesUsed={[<DiJavascript1 />, <FaSass />, <DiPhp />, <FaGitAlt />]}
                projectTitle="Maribe Arquitetura"
                projectDesc="Maribe é um escritório de arquitetura e urbanismo baseado em Recife, Pernambuco. Seu projeto solicitava uma página de apresentação, uma página para mostrar os projetos feitos pelo escritório, além de dois formulários, um para orçamento, outro para contato. Criar esse projeto do zero, desde o design até o tratamento back-end, me possibilitou um grande aprendizado que carrego desde então."
                projectRepoPrivacy={true}
                projectRepoLink="#"
                projectRepoTitle="Maribe Arquitetura"
                projectDeployLink="https://maribe.arq.br"
            />
            <ProjectCard
                projectCover={"/assets/projects/maribe.png"}
                technologiesUsed={[<DiJavascript1 />, <FaSass />, <DiPhp />, <FaGitAlt />]}
                projectTitle="Maribe Arquitetura"
                projectDesc="Maribe é um escritório de arquitetura e urbanismo baseado em Recife, Pernambuco. Seu projeto solicitava uma página de apresentação, uma página para mostrar os projetos feitos pelo escritório, além de dois formulários, um para orçamento, outro para contato. Criar esse projeto do zero, desde o design até o tratamento back-end, me possibilitou um grande aprendizado que carrego desde então."
                projectRepoPrivacy={true}
                projectRepoLink="#"
                projectRepoTitle="Maribe Arquitetura"
                projectDeployLink="https://maribe.arq.br"
            />
        </div>
    );
}