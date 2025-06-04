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
