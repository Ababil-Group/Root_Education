"use client";

import { NavigationMenuItem, NavigationMenuLink } from "../ui/NavigationMenu";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
// import axios from "axios";
// import { apiUrl } from "@/secrets";
// import { useQuery } from "@tanstack/react-query";
import { dummyUniversities } from "@/services/Data";
import { University } from "@/types/university";
const NavUniversities = () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["universities"],
  //   queryFn: async () => await axios.get(`${apiUrl}/all_university/?limit=all`),
  // });

  const universities = dummyUniversities as University[];
  const isLoading = false;
  const data = { data: universities };

  if (isLoading)
    return (
      <div className="grid w-[650px] grid-cols-3 gap-y-3 p-4 text-sm">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );

  return (
    <div className="grid w-[900px] grid-cols-3 gap-x-5 gap-y-3 p-4 text-sm">
      {data?.data?.map((university: University) => (
        <div key={university.id}>
          <NavigationMenuItem className="list-none">
            <Link
              href={`/universities/${university.slug}`}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className="flex items-center gap-x-2 font-semibold text-secondary duration-100 hover:text-primary">
                <Image
                  className="size-[30px] rounded-full border object-cover object-center"
                  src={university.photo as string}
                  alt={university.name}
                  height={30}
                  width={30}
                />
                <span className="text-xs">{university.name}</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      ))}
    </div>
  );
};

export default NavUniversities;
