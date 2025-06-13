"use client";

import Section from "@/components/common/Section";

import UniversityContainer from "./UniversityContainer";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { University } from "@/types/university";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type PaginatedUniversityData = {
  universities: University[];
  current_page: number;
  total_pages: number;
  next_page?: number;
  previous_page?: number;
  total_universities?: number;
};

const UniversitiesWeRepresent = ({
  universityData,
}: {
  universityData: University[];
}) => {
  const itemsPerPage = 6;
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || "1");

  // Calculate pagination values
  const totalPages = Math.ceil(universityData.length / itemsPerPage);

  // Get the universities for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUniversities = universityData.slice(startIndex, endIndex);

  const paginatedData: PaginatedUniversityData = {
    universities: currentUniversities, // Use the sliced data here
    current_page: currentPage,
    total_pages: totalPages,
    next_page: currentPage < totalPages ? currentPage + 1 : undefined,
    previous_page: currentPage > 1 ? currentPage - 1 : undefined,
    total_universities: universityData.length,
  };
  const router = useRouter();
  // const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handlePageChange = (page: string) => {
    params.set("page", page);
    router.push(`/universities?${params.toString()}`);
  };

  return (
    <Section
      className="pb-[100px] pt-[100px]"
      sectionName="Universities We Represent"
      title="Top-tier international partner universities"
    >
      {/* <div className="container">
        <div className="mb-10 flex flex-col items-center justify-between gap-y-3 rounded-lg border px-5 py-3 shadow-md md:flex-row">
          <h6 className="font-medium text-primary">
            Showing 01 - 18 of {universityData.total_universities} Results
          </h6>
          <div className="flex items-center justify-end gap-x-5">
            <button className="rounded-md border p-1 text-primary shadow">
              <IoGridSharp className="text-2xl" />
            </button>
            <Select onValueChange={(value) => handlePageChange(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by Default" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem
                    className="cursor-pointer hover:bg-secondary hover:bg-opacity-5"
                    value="default"
                  >
                    Default
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer hover:bg-secondary hover:bg-opacity-5"
                    value="high"
                  >
                    Total Students (High to Low)
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer hover:bg-secondary hover:bg-opacity-5"
                    value="low"
                  >
                    Total Students (Low to High)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div> */}
      <UniversityContainer universities={paginatedData.universities} />

      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            {paginatedData.current_page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() =>
                    handlePageChange(
                      paginatedData.previous_page
                        ? paginatedData.previous_page.toString()
                        : "",
                    )
                  }
                />
              </PaginationItem>
            )}
            {Array.from({ length: paginatedData.total_pages }).map(
              (_, index) => (
                <PaginationItem key={index}>
                  <Link
                    href={`/universities?page=${index + 1}`}
                    className={`${(index + 1).toString() === (paginatedData.current_page || 1).toString() ? "bg-sidebar-accent" : ""} cursor-pointer px-[13px] py-2 hover:bg-sidebar-accent`}
                  >
                    {index + 1}
                  </Link>
                </PaginationItem>
              ),
            )}
            {paginatedData.current_page < paginatedData.total_pages && (
              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() =>
                    handlePageChange(
                      paginatedData.next_page
                        ? paginatedData.next_page.toString()
                        : "",
                    )
                  }
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </Section>
  );
};

export default UniversitiesWeRepresent;
