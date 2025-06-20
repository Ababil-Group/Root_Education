"use client";
"use client";

import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/NavigationMenu";
import Image from "next/image";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { Skeleton } from "../ui/skeleton";
// import { apiUrl } from "@/secrets";
import { dummyCountries} from "@/services/Data";
import { Study_Country } from "@/types/country";
const NavCountries = () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["countries"],
  //   queryFn: async () => await axios.get(`${apiUrl}/study_country/`),
  // });

  const countries = dummyCountries as Study_Country[];
  const isLoading = false;
  const data = { data: countries };

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
    <div className="grid w-[650px] grid-cols-3 gap-y-3 p-4 text-sm">
      {data?.data?.map((country: Study_Country) => (
        <div key={country.id}>
          <NavigationMenuItem className="list-none">
            <Link
              href={`/countries/${country.route_slug}`}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary">
                <Image
                  className="size-[30px] rounded-full border"
                  src={country.flag as string}
                  alt={country.country}
                  height={30}
                  width={30}
                />
                <span>Study in {country.country}</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      ))}
    </div>
  );
};

export default NavCountries;
