import ApplicationProceduresCard from "./ApplicationProceduresCard";

const Prodceduresdata = [
  {
    id: 1,
    title: "Choose Your Program and University",
    description:
      "Research universities and programs. Check language options, academic offerings, and application deadlines on university websites.",
  },
  {
    id: 2,
    title: "Check Eligibility Requirements",
    description:
      "Verify academic qualifications, language proficiency, and any additional requirements like entrance exams or relevant experience.",
  },
  {
    id: 3,
    title: "Prepare Necessary Documents",
    description:
      "Prepare documents such as application form, transcripts, language certificate, passport, CV, motivation letter, recommendation letters, medical certificate, and fee proof.",
  },
  {
    id: 4,
    title: "Submit Your Application",
    description:
      "Submit your application online or by mail as specified by the university. Ensure all documents are correctly translated and certified if needed.",
  },
  {
    id: 5,
    title: "Apply for a Student Visa",
    description:
      "Apply for a Romanian student visa with acceptance letter, financial proof, accommodation, health insurance, criminal record, and valid passport.",
  },
  {
    id: 6,
    title: "Enrollment at the University",
    description:
      "Complete enrollment by submitting original documents, paying tuition fees, and registering in person at the university upon arrival in Romania.",
  },
  {
    id: 7,
    title: " Obtain a Residence Permit",
    description:
      "Apply for a residence permit with proof of enrollment, financial means, accommodation, health insurance, passport, visa, and photos at immigration.",
  },
  {
    id: 8,
    title: "Attend Orientation & Begin Classes",
    description:
      "Participate in the university orientation program to get acquainted with campus resources and academic expectations. Start your classes.",
  },
];
const ApplicationProcedures = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
      {Prodceduresdata.map((card) => (
        <ApplicationProceduresCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default ApplicationProcedures;
