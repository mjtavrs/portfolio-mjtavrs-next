import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import { FaSass, FaReact, FaGit, FaNodeJs, FaDocker, FaAws } from "react-icons/fa6";

type Props = {
    // projectCover: StaticImageData,
    // technologiesUsed: Array<ReactNode>,
    projectTitle: string,
    projectDesc: string
}

export default function ProjectCard({ projectTitle, projectDesc }: Props) {
    return (
        <div>
            <Image
                src="https://placehold.co/300x400"
                alt=""
                title=""
                height="400"
                width="300"
            />
            <div>
                <div>
                    <FaSass />
                    <FaReact />
                    <FaNodeJs />
                </div>
                <div>
                    <h3 className="text-lg">{projectTitle}</h3>
                    <p>{projectDesc}</p>
                </div>
                <div>
                    botões virão aqui
                </div>
            </div>
        </div>
    );
}