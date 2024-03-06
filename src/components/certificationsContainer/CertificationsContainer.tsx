import CertificationCard from "../shared/certificationCard/CertificationCard";

import { FaAws } from "react-icons/fa";

export default function CertificationsContainer() {
    return (
        <div className="flex items-center sm:flex-col md:flex-row gap-10">
            <CertificationCard
                certificationLogo={<FaAws />}
                certificationName="AWS Certified Developer - Associate"
                certificationDesc="Esta certificação demonstra que eu possuo conhecimento e compreensão dos principais produtos da AWS, usos e práticas recomendadas básicas de arquitetura da AWS e proficiência no desenvolvimento, implantação e depuração de aplicações baseadas em nuvem usando a AWS."
                certificationLink="#"
                certificationCode="x1231xa"
            />
        </div>
    );
}