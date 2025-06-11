// import { apiUrl } from "@/secrets";
import Image from "next/image";

interface Props {
  id: number;
  title: string;
  description: string;
}
const AdmissionRequirementsCard = ({ title, description }: Props) => {
  return (
    <div className="space-y-3 rounded-lg border border-x-8 border-primary border-x-primary p-5 shadow-md">
      <div className="flex items-center justify-center">
        <Image
          src="/icons/admission_requirement.svg"
          height={80}
          width={80}
          alt="Admission Requirements"
        />
      </div>
      <h5 className="text-center text-xl font-medium">{title}</h5>
      <p className="text-center text-sm font-medium">
        {description}
      </p>
    </div>
  );
};

export default AdmissionRequirementsCard;
