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
                <p className="text-[20px] font-light leading-8 text-black">
                  Applying to study in Romania involves several key steps,
                  including choosing a program, preparing documents, and meeting
                  specific requirements. Here&apos;s a general overview of the
                  application process:
                </p>
                <ApplicationProcedures />
              </>
            }
          />
          <InfoAccordion
            title="Admission Requirements"
            content={
              <>
                <p className="text-[20px] font-light leading-8 text-black">
                  Admission requirements for international students wishing to
                  study in Romania can vary depending on the level of study
                  (undergraduate, master&apos;s, or Ph.D.), the university, and
                  the chosen program. However, the general admission
                  requirements typically include the following:
                </p>
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
                        <TableCell className="border px-5">Visa Type</TableCell>
                        <TableCell className="border px-5">
                          <ul className="list-disc space-y-2 pl-5">
                            <li>
                              Short-Term Study Visa (Type C/SD): For courses
                              under 90 days.
                            </li>
                            <li>
                              Long-Term Study Visa(Type D/SD): For programs over
                              90 days.
                            </li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-[#F6F6F6] px-5 text-sm font-medium">
                        <TableCell className="border px-5">
                          Required Documents
                        </TableCell>
                        <TableCell className="border px-5">
                          <ul className="list-disc space-y-2 pl-5">
                            <li>Acceptance letter</li>
                            <li>Completed visa application form</li>
                            <li>
                              {" "}
                              Valid passport (at least 6 months beyond intended
                              stay).
                            </li>
                            <li>Proof of tuition payment</li>
                            <li>
                              Proof of financial means (approx. €2,000 per
                              year).
                            </li>
                            <li>Valid health insurance.</li>
                            <li> Proof of accommodation in Romania.</li>
                            <li> Criminal record certificate</li>
                            <li>Two passport-sized photos</li>
                            <li>Proof of visa fee payment.</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-sm font-medium">
                        <TableCell className="border px-5">Visa Fees</TableCell>
                        <TableCell className="border px-5">
                          <ul className="list-disc space-y-2 pl-5">
                            <li>Short-Term Visa (Type C/SD): Approx. €60.</li>
                            <li>Long-Term Visa (Type D/SD): Approx. €120.</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-[#F6F6F6] px-5 text-sm font-medium">
                        <TableCell className="border px-5">
                          Application Process
                        </TableCell>
                        <TableCell className="border px-5">
                          <ul className="list-disc space-y-2 pl-5">
                            <li>
                              Apply for a residence permit within 90 days of
                              arrival in Romania.
                            </li>
                            <li>Attend an interview (if required).</li>
                            <li>Processing time: 10-60 days.</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-sm font-medium">
                        <TableCell className="border px-5">
                          Residence Permit
                        </TableCell>
                        <TableCell className="border px-5">
                          <ul className="list-disc space-y-2 pl-5">
                            <li>
                              Apply within 90 days of arrival for a long-term
                              visa.
                            </li>
                            <li>Permit fee: ~€120.</li>
                          </ul>
                        </TableCell>
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
