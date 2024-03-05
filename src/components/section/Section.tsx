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
            <div className="flex flex-col items-center">
                <h2 className="text-2xl">{sectionTitle}</h2>
                <p className="text-center mt-4">{sectionDesc}</p>
            </div>
            {children}
        </section>
    );
}