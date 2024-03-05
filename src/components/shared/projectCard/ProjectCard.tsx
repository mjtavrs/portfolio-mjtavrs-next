import { StaticImageData } from "next/image";
import { ReactNode } from "react";

type Props = {
    projectCover: StaticImageData,
    technologiesUsed: Array<ReactNode>,
    projectTitle: string,
    projectDescription: string
}

export default function ProjectCard() {
    return (
        <>
        </>
    );
}