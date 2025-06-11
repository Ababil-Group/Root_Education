// import { Study_Country } from "@/types/country";
import AdmissionRequirementsCard from "./AdmissionRequirementsCard";

const Admissiondata = [
  {
    id: 1,
    title: "Educational Qualifications",
    description:
      "High school diploma for undergraduates; bachelor’s degree for master’s; relevant master’s for Ph.D. programs, with good academic standing.",
  },
  {
    id: 2,
    title: "Language Proficiency",
    description:
      "Proof of English proficiency (IELTS/TOEFL) or pass Romanian language test; preparatory year required for non-Romanian speakers.",
  },
  {
    id: 3,
    title: "Application Form",
    description:
      "Complete the university's application form with accurate personal and academic details; submit it before the deadline.",
  },
  {
    id: 4,
    title: "Passport & Identification",
    description:
      "Submit a valid passport copy and additional ID documents as required by the university for identification and verification purposes.",
  },
  {
    id: 5,
    title: "Academic Transcripts",
    description:
      "Provide official transcripts from previous schools, translated and authenticated if required, showing academic performance and qualifications.",
  },
  {
    id: 6,
    title: "Statement of Purpose (SOP)",
    description:
      "A written essay detailing your academic goals, career aspirations, and reasons for choosing the specific program and university.",
  },
  {
    id: 7,
    title: "Letters of Recommendation",
    description:
      "Two to three letters from professors or employers, endorsing your academic abilities, character, and suitability for the chosen program.",
  },
  {
    id: 8,
    title: "CV or Resume",
    description:
      "Submit a detailed CV or resume outlining your academic background, work experience, skills, and relevant extracurricular activities.",
  },
  {
    id: 9,
    title: "Medical Certificate",
    description:
      "Provide a medical certificate verifying your good health and lack of contagious diseases, necessary for enrollment and visa processing.",
  },
  {
    id: 10,
    title: "Application Fee",
    description:
      "Pay the non-refundable application fee as specified by the university, required for processing your admission application.",
  },
  {
    id: 11,
    title: "Interview (If Required)",
    description:
      "Participate in an interview if required, evaluating your suitability, motivation, and fit for the program and university.",
  },
  {
    id: 12,
    title: "Visa Requirements",
    description:
      "Fulfill visa requirements, including proof of admission, financial means, and health insurance, to study in Romania as an international student.",
  },
];

const AdmissionRequirements = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
      {Admissiondata.map((card) => (
        <AdmissionRequirementsCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default AdmissionRequirements;
