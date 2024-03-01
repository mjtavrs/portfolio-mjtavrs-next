import { ReactNode } from "react";

type Props = {
    techSymbol: ReactNode,
    techTitle: string
}

export default function ProjectCard({ techSymbol, techTitle }: Props) {
    return (
        <div className="bg-white sm:min-w-[48%] px-3 py-6 flex flex-col gap-2 items-center text-black border-2 border-black rounded-md">
            <div className="text-4xl">
                {techSymbol}
            </div>
            <h3 className="text-lg">{techTitle}</h3>
        </div>
    );
}