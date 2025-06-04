// import { Study_Country } from "@/types/country";
import AdmissionRequirements from "./AdmissionRequirements";
import ApplicationProcedures from "./ApplicationProcedures";
import InfoAccordion from "./InfoAccordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AccordionSection = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="rounded-lg border px-8 py-6 shadow-md">
          <InfoAccordion
            title="Application Procedures"
            content={
              <>
                <p>lorem</p>
                <ApplicationProcedures />
              </>
            }
          />
          <InfoAccordion
            title="Admission Requirements"
            content={
              <>
                <p>lorem</p>
                <AdmissionRequirements />
              </>
            }
          />
          <InfoAccordion
            title="Visa Procedures & Fees"
            content={
              <>
                <p>
                  Admission requirements for international students wishing to
                  study in Romania can vary depending on the level of study
                  (undergraduate, master&apos;s, or Ph.D.), the university, and
                  the chosen program. However, the general admission
                  requirements typically include the following:
                </p>
                <div className="my-10">
                  <Table className="border">
                    <TableHeader className="bg-[#F6F6F6] text-lg text-secondary">
                      <TableRow className="py-5">
                        <TableHead className="border px-5 py-5">
                          Category
                        </TableHead>
                        <TableHead className="border px-5 py-5">
                          Details
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="text-sm font-medium">
                        <TableCell className="border px-5">Procedure</TableCell>
                        <TableCell className="border px-5"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <p>
                  This is just basic information. To know the most updated
                  information students are encouraged to contact one of our
                  consultants.
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
