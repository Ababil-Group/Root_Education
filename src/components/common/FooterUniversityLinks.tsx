"use client";

import { University } from "@/types/university";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const dummyUniversities: University[] = [
  {
    id: 1,
    name: "Harvard University",
    slug: "harvard-university",
    description: "A prestigious Ivy League research university.",
    short_info: {
      country: "USA",
      university_type: "Private",
      total_students: 20000,
      launched: 1636,
    },
    photo: "/images/media/university_photos/1-40.jpg",
    logo: "/images/media/university_logos/aas_logo.png",
    video: "/videos/harvard.mp4",
    thumbnail: "/images/media/university_thumbnails/1-40.jpg",
    about_university: [
      {
        title: "History",
        description: "Founded in 1636, Harvard is the oldest U.S. university.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Computer Science" }],
      postgraduate_programs: [{ name: "Business Administration" }],
      doctoral_programs: [{ name: "Law" }],
    },
    scholarship: {
      short_description: "Multiple scholarships for international students.",
      table: [
        {
          scholarship_name: "Harvard Financial Aid",
          amount: "$15,000 - $50,000",
          eligibility_criteria: "Based on need and merit",
          provider: "Harvard University",
        },
      ],
      notes: [{ title: "Apply early for best chances" }],
    },
    application_guide: {
      short_description: "Step-by-step application instructions.",
      guide_list: [
        {
          title: "Submit Application",
          description: "Apply online via portal.",
        },
        {
          title: "Provide Documents",
          description: "Transcript, SOP, LORs, etc.",
        },
      ],
      bottom_description: "Ensure you meet deadlines and eligibility.",
    },
  },
  // Add more dummy entries
];

const FooterUniversityLinks = () => {
  const universities = dummyUniversities;

  return (
    <ul className="flex flex-col justify-between gap-4">
      {universities.slice(0, 7).map((university: University) => (
        <li className="flex items-center" key={university.id}>
          <div>
            <IoMdArrowDropright className="text-2xl" />
          </div>
          <Link
            className="duration-200 hover:text-primary"
            href={`/universities/${university.slug}`}
          >
            {university.name}
          </Link>
        </li>
      ))}
      <li className="flex items-center">
        <div>
          <IoMdArrowDropright className="text-2xl" />
        </div>
        <Link className="duration-200 hover:text-primary" href="/universities">
          View All Universities
        </Link>
      </li>
    </ul>
  );
};

export default FooterUniversityLinks;

// "use client";

// import { apiUrl } from "@/secrets";
// import { University } from "@/types/university";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import Link from "next/link";
// import { IoMdArrowDropright } from "react-icons/io";
// import { Skeleton } from "../ui/skeleton";

// const FooterUniversityLinks = () => {
//   const { data, isLoading } = useQuery({
//     queryKey: ["universities"],
//     queryFn: async () => await axios.get(`${apiUrl}/all_university/`),
//   });

//   const universities = data?.data;

//   if (isLoading)
//     return (
//       <div className="space-y-3">
//         <Skeleton className="h-[20px] w-full" />
//         <Skeleton className="h-[20px] w-full" />
//         <Skeleton className="h-[20px] w-full" />
//         <Skeleton className="h-[20px] w-full" />
//         <Skeleton className="h-[20px] w-full" />
//         <Skeleton className="h-[20px] w-full" />
//         <Skeleton className="h-[20px] w-full" />
//         <Skeleton className="h-[20px] w-full" />
//       </div>
//     );

//   return (
//     <ul className="flex flex-col justify-between gap-4">
//       {universities.results.slice(0, 7).map((university: University) => (
//         <li className="flex items-center" key={university.id}>
//           <div>
//             <IoMdArrowDropright className="text-2xl" />
//           </div>
//           <Link
//             className="duration-200 hover:text-primary"
//             href={`/universities/${university.slug}`}
//           >
//             {university.name}
//           </Link>
//         </li>
//       ))}
//       <li className="flex items-center">
//         <div>
//           <IoMdArrowDropright className="text-2xl" />
//         </div>
//         <Link className="duration-200 hover:text-primary" href="/universities">
//           View All Universities
//         </Link>
//       </li>
//     </ul>
//   );
// };

// export default FooterUniversityLinks;
