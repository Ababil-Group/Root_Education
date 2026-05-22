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
import { Study_Country } from "@/types/country";

const TabsSection = ({ countryInfo }: { countryInfo: Study_Country }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const countryName = countryInfo.country;
  const countryData = countryInfo.countryinfo;

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
                  About {countryName}
                </TabsTrigger>
                <TabsTrigger
                  value="tab2"
                  className={`px-4 py-5 text-lg font-medium ${
                    activeTab === "tab2"
                      ? "border border-b-4 border-primary border-b-primary text-primary"
                      : "border text-secondary"
                  }`}
                >
                  Programs in {countryName}
                </TabsTrigger>
                <TabsTrigger
                  value="tab3"
                  className={`px-4 py-5 text-lg font-medium ${
                    activeTab === "tab3"
                      ? "border border-b-4 border-primary border-b-primary text-primary"
                      : "border text-secondary"
                  }`}
                >
                  Scholarships in {countryName}
                </TabsTrigger>
                <TabsTrigger
                  value="tab4"
                  className={`px-4 py-5 text-lg font-medium ${
                    activeTab === "tab4"
                      ? "border border-b-4 border-primary border-b-primary text-primary"
                      : "border text-secondary"
                  }`}
                >
                  Application Guide
                </TabsTrigger>
              </TabsList>

              <TabsContent className="mt-14 space-y-4 pt-5" value="tab1">
                <p className="text-sm font-medium">
                  {countryInfo.box1.description}
                </p>
                {Array.isArray(countryData.about_university) && (
                  <div className="space-y-6">
                    {countryData.about_university.map((item, index) => (
                      <div key={index} className="rounded-lg border p-5">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-sm font-medium">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="tab2">
                <div className="space-y-8 pt-10">
                  <div>
                    <h4 className="mb-4 text-2xl font-semibold">
                      Undergraduate Programs
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                      {countryData.programs.undergraduate_programs.map(
                        (program) => (
                          <li key={program.name}>{program.name}</li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-2xl font-semibold">
                      Postgraduate Programs
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                      {countryData.programs.postgraduate_programs.map(
                        (program) => (
                          <li key={program.name}>{program.name}</li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-2xl font-semibold">
                      Doctoral Programs
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                      {countryData.programs.doctoral_programs.map((program) => (
                        <li key={program.name}>{program.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tab3">
                <div className="space-y-6 pt-10">
                  <p className="text-sm font-medium">
                    {countryData.scholarship.short_description}
                  </p>
                  <Table className="border text-center">
                    <TableHeader className="bg-primary text-center text-lg text-white">
                      <TableRow className="py-5">
                        <TableHead className="border py-5 text-center">
                          Scholarship Name
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Amount
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Eligibility
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Provider
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Array.isArray(countryData.scholarship.table) &&
                        countryData.scholarship.table.map((item) => (
                          <TableRow
                            key={item.scholarship_name}
                            className="text-sm font-medium"
                          >
                            <TableCell className="border">
                              {item.scholarship_name}
                            </TableCell>
                            <TableCell className="border">
                              {item.amount}
                            </TableCell>
                            <TableCell className="border">
                              {item.eligibility_criteria}
                            </TableCell>
                            <TableCell className="border">
                              {item.provider}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  {Array.isArray(countryData.scholarship.notes) && (
                    <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                      {countryData.scholarship.notes.map((note, index) => (
                        <li key={index}>{note.title}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="tab4">
                <div className="space-y-6 pt-10">
                  <p className="text-sm font-medium">
                    {countryData.application_guide.short_description}
                  </p>
                  <div className="space-y-4">
                    {countryData.application_guide.guide_list.map(
                      (guide, index) => (
                        <div key={index} className="rounded-lg border p-5">
                          <h4 className="text-xl font-semibold">
                            {guide.title}
                          </h4>
                          <p className="text-sm font-medium">
                            {guide.description}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                  <p className="text-sm font-medium">
                    {countryData.application_guide.bottom_description}
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-[50px] lg:hidden">
        <div className="container space-y-20">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">About {countryName}</h3>
            <p className="text-sm font-medium">
              {countryInfo.box1.description}
            </p>
            {Array.isArray(countryData.about_university) && (
              <div className="space-y-6">
                {countryData.about_university.map((item, index) => (
                  <div key={index} className="rounded-lg border p-5">
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-sm font-medium">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-5">
            <h3 className="text-center text-3xl font-semibold">
              Programs in {countryName}
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold">
                  Undergraduate Programs
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                  {countryData.programs.undergraduate_programs.map(
                    (program) => (
                      <li key={program.name}>{program.name}</li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Postgraduate Programs</h4>
                <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                  {countryData.programs.postgraduate_programs.map((program) => (
                    <li key={program.name}>{program.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Doctoral Programs</h4>
                <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                  {countryData.programs.doctoral_programs.map((program) => (
                    <li key={program.name}>{program.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-center text-3xl font-semibold">
              Scholarships in {countryName}
            </h3>
            <div>
              <p className="text-center text-sm font-medium">
                {countryData.scholarship.short_description}
              </p>
              <div className="mt-10 space-y-6">
                {countryData.scholarship.table.map((item) => (
                  <Table
                    className="border text-center"
                    key={item.scholarship_name}
                  >
                    <TableBody>
                      <TableRow>
                        <TableCell className="border bg-primary text-white">
                          Scholarship Name
                        </TableCell>
                        <TableCell className="border">
                          {item.scholarship_name}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="border bg-primary text-white">
                          Amount
                        </TableCell>
                        <TableCell className="border">{item.amount}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="border bg-primary text-white">
                          Eligibility
                        </TableCell>
                        <TableCell className="border">
                          {item.eligibility_criteria}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="border bg-primary text-white">
                          Provider
                        </TableCell>
                        <TableCell className="border">
                          {item.provider}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-center text-3xl font-semibold">
              Application Guide
            </h3>
            <div className="space-y-6">
              <p className="text-center text-sm font-medium">
                {countryData.application_guide.short_description}
              </p>
              {countryData.application_guide.guide_list.map((guide, index) => (
                <div key={index} className="rounded-lg border p-5">
                  <h4 className="text-xl font-semibold">{guide.title}</h4>
                  <p className="text-sm font-medium">{guide.description}</p>
                </div>
              ))}
              <p className="text-sm font-medium">
                {countryData.application_guide.bottom_description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabsSection;
