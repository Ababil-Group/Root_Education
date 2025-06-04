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
    short_breaf: "Romania offers quality education at affordable costs.",
    whystudylist: [
      {
        heading: "Affordable Tuition",
        content:
          "Romania has lower tuition fees compared to other EU countries.",
      },
      {
        heading: "Multicultural Environment",
        content: "Students from around the world come to study here.",
      },
    ],
  },
  costofliving: {
    short_breaf: "Cost of living in Romania is budget-friendly for students.",
    fees: [
      { program: "Bachelor", cost: "€2000 - €5000/year" },
      { program: "Master", cost: "€2500 - €6000/year" },
    ],
    list: [
      {
        title: "Accommodation",
        content: "Students can find affordable accommodation.",
      },
      {
        title: "Food",
        content: "Students can find affordable food options.",
      },
      {
        title: "Transportation",
        content: "Students can find affordable transportation options.",
      },
    ],
  },
  jobopportunity: {
    short_breaf: "Students are allowed to work part-time up to 20 hours/week.",
    list: [
      {
        title: "Part-time Jobs",
        content: "Available in hospitality and services.",
      },
      {
        title: "Internships",
        content: "Offered by universities and companies.",
      },
    ],
  },
  scholarship: {
    short_breaf: "Romania offers scholarships based on merit and need.",
    scholarshiplist: [
      {
        name: "Romanian Government Scholarship",
        criteria: "Non-EU students with good academic record",
        coverage: "Full tuition, accommodation, stipend",
        deadline: "March 1",
        process: "Apply through Ministry of Foreign Affairs",
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
