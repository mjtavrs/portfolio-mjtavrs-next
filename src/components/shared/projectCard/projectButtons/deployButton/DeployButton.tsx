import Link from "next/link";

import { TbWorldWww } from "react-icons/tb";

type Props = {
    deployLink: string,
    projectTitle: string
}

export default function DeployButton({ deployLink, projectTitle }: Props) {
    return (
        <div className="bg-gray-400 max-w-[48%] rounded-md">
            <Link
                href={deployLink}
                title={projectTitle}
                className="p-2 w-fit flex gap-2 items-center font-medium text-black"
                target="_blank"
            >
                < TbWorldWww />
                Deploy
            </Link>
        </div>
    );
}