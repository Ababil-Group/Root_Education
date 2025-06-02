import { Applicationprocedureslist, Study_Country } from "@/types/country";
import ApplicationProceduresCard from "./ApplicationProceduresCard";

const ApplicationProcedures = ({
  countryInfo,
}: {
  countryInfo: Study_Country;
}) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
      {countryInfo.application_procedures.steps.map((procedure, index) => (
        <ApplicationProceduresCard
          key={String(procedure)}
          procedure={procedure as unknown as Applicationprocedureslist}
          index={index}
        />
      ))}
    </div>
  );
};

export default ApplicationProcedures;
