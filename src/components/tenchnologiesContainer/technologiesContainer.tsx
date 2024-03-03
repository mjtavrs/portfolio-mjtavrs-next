import TechnologyCard from "../shared/technologyCard/technologyCard";

import { SiStyledcomponents, SiTailwindcss, SiRedux, SiNextdotjs, SiExpress, SiSqlite, SiPostgresql, SiMongodb, SiVite, SiTypescript, SiMongoose } from "react-icons/si";
import { FaSass, FaReact, FaGit, FaNodeJs, FaDocker, FaAws } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

export default function TechnologiesContainer() {
    return (
        <section
            className="py-2 px-4 flex gap-3 flex-wrap"
        >
            <TechnologyCard
                techSymbol={<IoLogoJavascript />}
                techTitle="JavaScript"
            />
            <TechnologyCard
                techSymbol={<SiTypescript />}
                techTitle="TypeScript"
            />
            <TechnologyCard
                techSymbol={<FaReact />}
                techTitle="React"
            />
            <TechnologyCard
                techSymbol={<SiRedux />}
                techTitle="Redux"
            />
            <TechnologyCard
                techSymbol={<SiVite />}
                techTitle="Vite"
            />
            <TechnologyCard
                techSymbol={<SiNextdotjs />}
                techTitle="Next.js"
            />
            <TechnologyCard
                techSymbol={<FaNodeJs />}
                techTitle="Node.js"
            />
            <TechnologyCard
                techSymbol={<SiExpress />}
                techTitle="Express.js"
            />
            <TechnologyCard
                techSymbol={<FaSass />}
                techTitle="Sass"
            />
            <TechnologyCard
                techSymbol={<SiTailwindcss />}
                techTitle="TailwindCSS"
            />
            <TechnologyCard
                techSymbol={<SiStyledcomponents />}
                techTitle="CSS-in-JS"
            />
            <TechnologyCard
                techSymbol={<SiSqlite />}
                techTitle="SQLite"
            />
            <TechnologyCard
                techSymbol={<SiPostgresql />}
                techTitle="PostgreSQL"
            />
            <TechnologyCard
                techSymbol={<SiMongodb />}
                techTitle="MongoDB"
            />
            <TechnologyCard
                techSymbol={<SiMongoose />}
                techTitle="Mongoose"
            />
            <TechnologyCard
                techSymbol={<FaGit />}
                techTitle="Git"
            />
            <TechnologyCard
                techSymbol={<FaDocker />}
                techTitle="Docker"
            />
            <TechnologyCard
                techSymbol={<FaAws />}
                techTitle="AWS"
            />
        </section>
    );
}