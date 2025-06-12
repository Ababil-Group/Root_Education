"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import TuitionFees from "./TuitionFees";
import LivingCosts from "./LivingCosts";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";

import Image from "next/image";

const countryInfo = {
  whystudy: {
    short_breaf:
      "Studying in Romania offers a unique blend of high-quality education, affordable tuition fees, and a rich cultural experience. Here are some key reasons to consider studying in Romania:",
    whystudylist: [
      {
        heading: "High-Quality Education",
        content:
          "Romanian universities are known for their strong academic programs, particularly in fields like medicine, engineering, and computer science. Many universities offer programs in English, French, and German, making it accessible to international students.",
      },
      {
        heading: "Affordable Tuition and Living Costs",
        content:
          "Compared to other European countries, Romania offers lower tuition fees and living costs, making it an attractive destination for students looking for quality education on a budget.",
      },
      {
        heading: "Cultural Diversity",
        content:
          "Romania is a melting pot of cultures, with a rich history and diverse traditions. Students can experience a unique blend of Eastern and Western European influences, which is reflected in the country's architecture, cuisine, and lifestyle.",
      },
      {
        heading: "Recognition of Degrees",
        content:
          "Romanian degrees are recognized across the European Union and beyond, allowing graduates to pursue careers or further studies internationally.",
      },
      {
        heading: "Vibrant Student Life",
        content:
          "Romania has a lively student community with numerous extracurricular activities, clubs, and events. Cities like Bucharest, Cluj-Napoca, and Timișoara offer vibrant nightlife, cultural festivals, and opportunities to explore the arts.",
      },
      {
        heading: "Historical and Natural Attractions",
        content:
          "Romania is known for its stunning landscapes, including the Carpathian Mountains, the Danube River, and the Black Sea coast. Students can explore historical sites like castles, monasteries, and ancient towns, offering a rich experience beyond academics.",
      },
    ],
  },
  costofliving: {
    short_breaf:
      "The cost of studying and living in Romania is relatively affordable compared to other European countries, making it an attractive option for international students. Here’s a breakdown of the costs:",
    fees: [
      { program: "Bachelor", cost: "€2000 - €5000/year" },
      { program: "Master", cost: "€2000 - €6000/year" },
      { program: "PhD", cost: "€2500 - €7000/year" },
      { program: "Medical Studies", cost: "€5000 - €9000/year" },
    ],
    list: [
      {
        title: "Accommodation",
        content:
          "Accommodation in Romania includes affordable university dorms (€50–€150) and private apartments (€200–€400) for students.",
      },
      {
        title: "Food",
        content:
          "In Romania, food costs include home cooking (€100–€150) and eating out, which ranges from €5–€10.",
      },
      {
        title: "Transportation",
        content:
          "Transportation in Romania costs €10–€15 monthly for public transit, with walking or biking as alternatives.",
      },
      {
        title: "Utilities",
        content:
          "Utilities in Romania, including electricity, water, heating, and internet, cost between €50–€100 per month.",
      },
      {
        title: "Health Insurance",
        content:
          "Health insurance for students in Romania costs between €10–€20 per month, providing essential coverage.",
      },
      {
        title: "Miscellaneous",
        content:
          "Miscellaneous expenses in Romania, including entertainment and personal items, typically range from €50 to €100 monthly.",
      },
    ],
  },
  jobopportunity: {
    short_breaf:
      "Romania offers a growing number of job opportunities for international students, both during and after their studies. Here’s what you need to know:",
    list: [
      {
        title: "Part-Time Work During Studies",
        content:
          "International students can work part-time during studies in Romania, with non-EU students allowed up to 20 hours per week.",
      },
      {
        title: "Internships & Practical Training",
        content:
          "Romanian universities offer internships and practical training opportunities, enhancing skills and increasing employability with local and international companies.",
      },
      {
        title: "Post-Graduation Employment",
        content:
          "Graduates in Romania can find job opportunities in various sectors, with a growing economy offering roles in multiple industries.",
      },
      {
        title: "Language Skills Advantage",
        content:
          "Romania’s job market values language skills; while Romanian helps, many companies also seek English proficiency for diverse roles.",
      },
      {
        title: "Entrepreneurship Opportunities",
        content:
          "Romania’s startup ecosystem is thriving, offering entrepreneurial opportunities with support from incubators and accelerators for innovative business ideas.",
      },
    ],
  },
  scholarship: {
    short_breaf:
      "Romania offers a range of scholarships for international students, making it an appealing destination for those seeking financial support for their studies. These scholarships are typically provided by the Romanian government, universities, and various organizations. They may cover tuition fees, accommodation, and even living expenses, depending on the type and level of the scholarship.",
    scholarshiplist: [
      {
        name: "Romanian Government Scholarship",
        criteria: "Non-EU students with excellent academic records",
        coverage: "Tuition fees, accommodation, monthly stipend",
        deadline: "March 31, 2024",
        process: "Submit application via the official website",
      },
      {
        name: "University Scholarship",
        criteria: "High-achieving international students",
        coverage: "Partial to full tuition fee waiver",
        deadline: "April 15, 2024",
        process: "Apply directly to the university",
      },
      {
        name: "Erasmus+ Program",
        criteria: "EU students studying in Romanian partner universities",
        coverage: "Tuition fees, travel costs, living allowance",
        deadline: "Varies by program",
        process: "Apply through home university",
      },
      {
        name: "Private Foundation Scholarship",
        criteria: "Students in specific fields like medicine or engineering",
        coverage: "Varies, typically includes tuition and living costs",
        deadline: "May 1, 2024",
        process: "Apply through the foundation's website",
      },
    ],
  },
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <section className="hidden py-[50px] lg:block">
        <div className="container">
          <div className="rounded-xl border p-8 shadow-md">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-10 grid w-full grid-cols-4 gap-x-8">
                <TabsTrigger
                  value="tab1"
                  className={`px-4 py-5 text-lg font-medium ${
                    activeTab === "tab1"
                      ? "border border-b-4 border-primary border-b-primary text-primary"
                      : "border text-secondary"
                  }`}
                >
                  Why Study in Romania
                </TabsTrigger>
                <TabsTrigger
                  value="tab2"
                  className={`px-4 py-5 text-lg font-medium ${
                    activeTab === "tab2"
                      ? "border border-b-4 border-primary border-b-primary text-primary"
                      : "border text-secondary"
                  }`}
                >
                  Cost of Study and Living
                </TabsTrigger>
                <TabsTrigger
                  value="tab3"
                  className={`px-4 py-5 text-lg font-medium ${
                    activeTab === "tab3"
                      ? "border border-b-4 border-primary border-b-primary text-primary"
                      : "border text-secondary"
                  }`}
                >
                  Job Opportunity
                </TabsTrigger>
                <TabsTrigger
                  value="tab4"
                  className={`px-4 py-5 text-lg font-medium ${
                    activeTab === "tab4"
                      ? "border border-b-4 border-primary border-b-primary text-primary"
                      : "border text-secondary"
                  }`}
                >
                  Scholarships
                </TabsTrigger>
              </TabsList>

              <TabsContent className="mt-14 space-y-4 pt-5" value="tab1">
                <p className="text-sm font-medium">
                  {countryInfo.whystudy.short_breaf}
                </p>
                {Array.isArray(countryInfo.whystudy.whystudylist) && (
                  <ol className="list-decimal space-y-4 pl-5 text-sm font-medium text-gray-800">
                    {countryInfo.whystudy.whystudylist.map((list, index) => (
                      <li key={index}>
                        <p>
                          <span className="font-semibold">{list.heading}:</span>{" "}
                          {list.content}
                        </p>
                      </li>
                    ))}
                  </ol>
                )}
                <p className="text-sm font-medium">
                  These factors make Romania an appealing destination for
                  international students seeking a well-rounded education and
                  life experience.
                </p>
              </TabsContent>
              <TabsContent value="tab2">
                <div className="pt-10">
                  <p className="text-sm font-medium">
                    {countryInfo.costofliving.short_breaf}
                  </p>
                  <TuitionFees tuitionFees={countryInfo.costofliving.fees} />
                  <LivingCosts livingCosts={countryInfo.costofliving.list} />
                </div>
              </TabsContent>
              <TabsContent value="tab3">
                <div className="pt-10">
                  <p className="text-center text-sm font-medium">
                    {countryInfo.jobopportunity.short_breaf}
                  </p>

                  <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-10">
                    {(
                      countryInfo.jobopportunity.list as {
                        title: string;
                        content: string;
                      }[]
                    ).map((list, index) => (
                      <FadeInLeftWithSlowBounce
                        className="min-h-[240px] max-w-[450px] space-y-3 rounded-lg border border-l-8 border-r-8 border-l-primary border-r-primary p-5 shadow-md"
                        key={index}
                      >
                        <div className="flex items-center justify-center">
                          <Image
                            src="/icons/job.svg"
                            height={60}
                            width={60}
                            alt={list.title}
                          />
                        </div>
                        <h5 className="text-center text-xl font-medium">
                          {list.title}
                        </h5>
                        <p className="text-center text-sm font-medium">
                          {list.content}
                        </p>
                      </FadeInLeftWithSlowBounce>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tab4">
                <div className="pt-10">
                  <p className="text-center text-sm font-medium">
                    {countryInfo.scholarship.short_breaf}
                  </p>

                  <div className="mt-10">
                    <Table className="border text-center">
                      <TableHeader className="bg-primary text-center text-lg text-white">
                        <TableRow className="py-5">
                          <TableHead className="border py-5 text-center">
                            Scholarship Name
                          </TableHead>
                          <TableHead className="border py-5 text-center">
                            Eligibility Criteria
                          </TableHead>
                          <TableHead className="border py-5 text-center">
                            Coverage
                          </TableHead>
                          <TableHead className="border py-5 text-center">
                            Application Deadline
                          </TableHead>
                          <TableHead className="border py-5 text-center">
                            Application Process
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Array.isArray(
                          countryInfo.scholarship.scholarshiplist,
                        ) &&
                          countryInfo.scholarship.scholarshiplist.map(
                            (list) => (
                              <TableRow
                                className="text-sm font-medium"
                                key={list.name}
                              >
                                <TableCell className="border">
                                  {list.name}
                                </TableCell>
                                <TableCell className="border">
                                  {list.criteria}
                                </TableCell>
                                <TableCell className="border">
                                  {list.coverage}
                                </TableCell>
                                <TableCell className="border">
                                  {list.deadline}
                                </TableCell>
                                <TableCell className="border">
                                  {list.process}
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="py-[50px] lg:hidden">
        <div className="container space-y-20">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">Why Study in Romania</h3>
            <p className="text-sm font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
              reiciendis.
            </p>
            <ol className="list-decimal space-y-3 pl-4 text-sm font-medium">
              <li>
                <strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat, iure!
              </li>
            </ol>
            <p className="text-sm font-medium">
              These factors make Romania an appealing destination for
              international students seeking a well-rounded education and life
              experience.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-center text-3xl font-semibold">
              Cost of Study and Living
            </h3>
            <div>
              <p className="text-center text-sm font-medium">
                {countryInfo.costofliving.short_breaf}
              </p>
              <TuitionFees tuitionFees={countryInfo.costofliving.fees} />
              <LivingCosts livingCosts={countryInfo.costofliving.list} />
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-center text-3xl font-semibold">
              Job Opportunity
            </h3>
            <div>
              <p className="text-center text-sm font-medium">
                {countryInfo.jobopportunity.short_breaf}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-10">
                {(
                  countryInfo.jobopportunity.list as {
                    title: string;
                    content: string;
                  }[]
                ).map((jobopportunity) => (
                  <FadeInLeftWithSlowBounce
                    className="min-h-[240px] max-w-[450px] space-y-3 rounded-lg border border-l-8 border-r-8 border-l-primary border-r-primary p-5 shadow-md"
                    key={jobopportunity.title}
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src="/icons/job.svg"
                        height={60}
                        width={60}
                        alt={jobopportunity.title}
                      />
                    </div>
                    <h5 className="text-center text-xl font-medium">
                      {jobopportunity.title}
                    </h5>
                    <p className="text-center text-sm font-medium">
                      {jobopportunity.content}
                    </p>
                  </FadeInLeftWithSlowBounce>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-center text-3xl font-semibold">Scholarships</h3>
            <div>
              <p className="text-center text-sm font-medium">
                {countryInfo.scholarship.short_breaf}
              </p>

              <div className="mt-10 space-y-10">
                {Array.isArray(countryInfo.scholarship.scholarshiplist) &&
                  countryInfo.scholarship.scholarshiplist.map((list) => (
                    <Table className="border text-center" key={list.name}>
                      <TableBody>
                        <TableRow>
                          <TableCell className="border bg-primary text-white">
                            Scholarship Name
                          </TableCell>
                          <TableCell className="border">{list.name}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="border bg-primary text-white">
                            Eligibility Criteria
                          </TableCell>
                          <TableCell className="border">
                            {list.criteria}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="border bg-primary text-white">
                            Coverage
                          </TableCell>
                          <TableCell className="border">
                            {list.coverage}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="border bg-primary text-white">
                            Application Deadline
                          </TableCell>
                          <TableCell className="border">
                            {list.deadline}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="border bg-primary text-white">
                            Application Process
                          </TableCell>
                          <TableCell className="border">
                            {list.process}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabsSection;
