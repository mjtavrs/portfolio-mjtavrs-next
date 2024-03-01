import ProjectCard from "../shared/projectCard/ProjectCard";

import { SiStyledcomponents, SiTailwindcss, SiRedux, SiNextdotjs, SiExpress, SiSqlite, SiPostgresql, SiMongodb, SiVite, SiTypescript, SiMongoose } from "react-icons/si";
import { FaSass, FaReact, FaGit, FaNodeJs, FaDocker, FaAws } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

export default function ProjectsContainer() {
    return (
        <section
            className="py-2 px-4 flex gap-3 flex-wrap"
        >
            <ProjectCard
                techSymbol={<IoLogoJavascript />}
                techTitle="JavaScript"
            />
            <ProjectCard
                techSymbol={<SiTypescript />}
                techTitle="TypeScript"
            />
            <ProjectCard
                techSymbol={<FaReact />}
                techTitle="React"
            />
            <ProjectCard
                techSymbol={<SiRedux />}
                techTitle="Redux"
            />
            <ProjectCard
                techSymbol={<SiVite />}
                techTitle="Vite"
            />
            <ProjectCard
                techSymbol={<SiNextdotjs />}
                techTitle="Next.js"
            />
            <ProjectCard
                techSymbol={<FaNodeJs />}
                techTitle="Node.js"
            />
            <ProjectCard
                techSymbol={<SiExpress />}
                techTitle="Express.js"
            />
            <ProjectCard
                techSymbol={<FaSass />}
                techTitle="Sass"
            />
            <ProjectCard
                techSymbol={<SiTailwindcss />}
                techTitle="TailwindCSS"
            />
            <ProjectCard
                techSymbol={<SiStyledcomponents />}
                techTitle="CSS-in-JS"
            />
            <ProjectCard
                techSymbol={<SiSqlite />}
                techTitle="SQLite"
            />
            <ProjectCard
                techSymbol={<SiPostgresql />}
                techTitle="PostgreSQL"
            />
            <ProjectCard
                techSymbol={<SiMongodb />}
                techTitle="MongoDB"
            />
            <ProjectCard
                techSymbol={<SiMongoose />}
                techTitle="Mongoose"
            />
            <ProjectCard
                techSymbol={<FaGit />}
                techTitle="Git"
            />
            <ProjectCard
                techSymbol={<FaDocker />}
                techTitle="Docker"
            />
            <ProjectCard
                techSymbol={<FaAws />}
                techTitle="AWS"
            />
        </section>
    );
}