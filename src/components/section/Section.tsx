import { ReactNode } from "react"
import ScrollHelper from "./ScrollHelper/ScrollHelper"

type Props = {
    sectionId: string,
    sectionTitle: string,
    sectionDesc: string,
    children: ReactNode
}

export default function Section({ sectionId, sectionTitle, sectionDesc, children }: Props) {
    return (
        <section className="flex flex-col gap-5 p-4" id={sectionId}>
            <ScrollHelper id={sectionId} />
            <div className="flex flex-col gap-3 items-center">
                <h2 className="text-2xl z-10">
                    <span className="border-b-2 border-orange inline-block">
                        {sectionTitle}
                    </span>
                </h2>
                <p className="text-center mt-4">{sectionDesc}</p>
            </div>
            {children}
        </section>
    );
}