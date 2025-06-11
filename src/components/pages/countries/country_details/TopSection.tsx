import { Study_Country } from "@/types/country";
import AdmissionForm from "./AdmissionForm";

const TopSection = ({ countryInfo }: { countryInfo: Study_Country }) => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col gap-x-20 gap-y-20 lg:flex-row">
        <div className="basis-full space-y-6 lg:basis-[60%]">
          {/* <h2 className="text-4xl font-semibold">{countryInfo.box1.title}</h2> */}
          <h2 className="text-4xl font-semibold">
            Study in Romania For Bangladesh Students
          </h2>
          <div className="space-y-3">
            <p className="text-sm font-medium">
              Romania is an increasingly popular destination for Bangladeshi
              students seeking a high-quality European education at an
              affordable cost. Renowned for its strong academic tradition,
              Romania offers a wide range of programs in English across various
              fields, including engineering, medicine, business, and the arts.
              Universities in Romania are recognized for their rigorous
              curricula, modern facilities, and opportunities for research and
              innovation.
            </p>
            <p className="text-sm font-medium">
              For Bangladeshi students, Romania provides a welcoming environment
              with a rich cultural heritage, vibrant student life, and a lower
              cost of living compared to other European countries. The country’s
              universities are known for their international student support
              services, making the transition to a new academic and social
              environment smoother. Scholarships are also available to help
              offset tuition fees and living expenses, making studying in
              Romania even more accessible.
            </p>
            <p className="text-sm font-medium">
              Additionally, Romania&apos;s central location in Europe allows students
              to explore neighboring countries and cultures, enhancing their
              educational experience. With degrees recognized across the
              European Union and beyond, a Romanian education can open doors to
              global career opportunities. Whether you are pursuing
              undergraduate, postgraduate, or doctoral studies, Romania offers a
              pathway to academic success and personal growth for Bangladeshi
              students.
            </p>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-x-6 gap-y-4 rounded-lg border p-8 shadow-md md:flex-row">
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Why Study in {countryInfo.country}?
                </h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Cost of Study and Living
                </h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">Job Opportunity</h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">Scholarships</h6>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Application Procedures
                </h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Admission Requirements
                </h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">Required Documents</h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Visa Procedures & Fees
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full rounded-xl border p-10 shadow-md lg:basis-[40%]">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Application for Admission
          </h2>
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
