import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import RepoButton from "./projectButtons/repoButton/RepoButton";
import DeployButton from "./projectButtons/deployButton/DeployButton";

type Props = {
    projectCover: string,
    technologiesUsed: Array<ReactNode>,
    projectTitle: string,
    projectDesc: string,
    projectRepoPrivacy: boolean,
    projectRepoTitle: string,
    projectRepoLink: string,
    projectDeployLink: string
}

export default function ProjectCard({ projectCover, technologiesUsed, projectTitle, projectDesc, projectRepoPrivacy, projectRepoTitle, projectRepoLink, projectDeployLink }: Props) {
    return (
        <div className="bg-light-beige w-80 border-2 border-black rounded-md">
            <Image
                src={projectCover}
                alt="Cover do projeto"
                title={projectTitle}
                height="0"
                width="320"
                className="rounded-t-md"
            />
            <div className="py-4 px-5">
                <div className="pb-3 flex items-center gap-2 text-black">
                    <h4>Tecnologias usadas:</h4>
                    <div className="flex flex-wrap flex-1 gap-1 text-2xl">
                        {[
                            technologiesUsed
                        ].map((technology) => (
                            technology
                        ))}
                    </div>
                </div>
                <div>
                    <div className="py-3 border-y-[1px] border-lighter-gray">
                        <h3 className="font-medium text-lg text-center">{projectTitle}</h3>
                    </div>
                    <p className="pt-3 pb-5">{projectDesc}</p>
                </div>
                <div className="flex justify-around">
                    <RepoButton
                        isPrivate={projectRepoPrivacy}
                        repoTitle={projectRepoTitle}
                        repoLink={projectRepoLink}
                    />
                    <DeployButton
                        deployLink={projectDeployLink}
                        projectTitle={projectRepoTitle}
                    />
                </div>
            </div>
        </div>
    );
}