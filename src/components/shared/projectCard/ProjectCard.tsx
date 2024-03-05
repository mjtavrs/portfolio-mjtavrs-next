import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import { FaSass, FaReact, FaGit, FaNodeJs, FaDocker, FaAws } from "react-icons/fa6";
import RepoButton from "./projectButtons/repoButton/RepoButton";

type Props = {
    // projectCover: StaticImageData,
    // technologiesUsed: Array<ReactNode>,
    projectTitle: string,
    projectDesc: string
}

export default function ProjectCard({ projectTitle, projectDesc }: Props) {
    return (
        <div className="bg-light-beige w-80 border-[1px] border-black rounded-md">
            <Image
                src="https://placehold.co/320x400"
                alt=""
                title=""
                height="0"
                width="320"
                className="rounded-t-md"
            />
            <div className="py-4 px-5">
                <div className="pb-3 flex items-center gap-2 text-black">
                    <h4>Tecnologias usadas:</h4>
                    <div className="flex flex-wrap flex-1 gap-1 text-2xl">
                        <FaSass />
                        <FaReact />
                        <FaNodeJs />
                    </div>
                </div>
                <div>
                    <div className="py-3 border-y-[1px] border-lighter-gray">
                        <h3 className="font-medium text-lg text-center">{projectTitle}</h3>
                    </div>
                    <p className="pt-3 pb-5">{projectDesc}</p>
                </div>
                <div>
                    <RepoButton
                        isPrivate={true}
                        repoTitle="Maribe Arquitetura"
                    />
                </div>
            </div>
        </div>
    );
}