"use client";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
// import { Study_Country } from "@/types/country";
import { dummyCountries } from "@/services/Data";
import Image from "next/image";

const countrycity = [
  {
    id: 1,
    city: "Bucharest",
    photo: "/images/city/Bucharest.svg",
  },
  {
    id: 2,
    city: "Constanta",
    photo: "/images/city/Constanta.svg",
  },
  {
    id: 3,
    city: "Iași",
    photo: "/images/city/Iași.svg",
  },
  {
    id: 4,
    city: "Timișoara",
    photo: "/images/city/Timișoara.svg",
  },
  {
    id: 5,
    city: "Cluj-Napoca",
    photo: "/images/city/Cluj-Napoca.svg",
  },
  {
    id: 6,
    city: "Brașov",
    photo: "/images/city/Brașov.svg",
  },
];
const BestCities = () => {
  return (
    <Section
      sectionName="Best Cities Choose by students"
      title={`Best Cities for Studying ${dummyCountries[0].country}`}
    >
      <div className="container">
        <div className="flex flex-wrap items-start justify-center gap-10">
          {countrycity.map((country, index) => (
            <FadeInUpWithSlowBounce
              key={index}
              className="min-h-[200px] w-[180px] space-y-4"
            >
              <div className="mx-auto size-[150px] rounded-full bg-white p-1">
                <div className="relative mx-auto min-h-full">
                  <Image
                    className="rounded-full border-2 border-dotted border-primary object-cover object-center"
                    src={country.photo as string}
                    alt={country.city}
                    fill
                  />
                </div>
              </div>
              <h3 className="text-center text-2xl font-bold">
                {country.city}
              </h3>
            </FadeInUpWithSlowBounce>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BestCities;
