import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
// import { University } from "@/types/university";
import Image from "next/image";

const partnerUniversities = [
  {
    id: 1,
    name: "Spiru haret University, Romania",
    photo: "/images/Spiru.svg",
    short_info: {
      country: "Romania",
    },
  },
  {
    id: 2,
    name: "Constanta Maritime University CMU",
    photo: "/images/Constanta.svg",
    short_info: {
      country: "Romania",
    },
  },
  {
    id: 3,
    name: "Romanian - American University",
    photo: "/images/American.svg",
    short_info: {
      country: "United States",
    },
  },
];
const InstituteRepresent = () => {
  return (
    <Section
      sectionName="Institute we represent for Countries"
      title="Leading Institutions We Represent Globally"
    >
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6">
          {partnerUniversities.map((university) => (
            <FadeInUpWithSlowBounce
              className="flex min-h-[100px] w-[500px] items-center justify-start gap-x-4 rounded-full border px-4 py-2 shadow-sm"
              key={university.id}
            >
              <Image
                className="size-[70px] rounded-full border"
                src={university.photo as string}
                alt=""
                height={70}
                width={70}
              />

              <div className="">
                <h5 className="text-lg font-medium">{university.name}</h5>
                <h6 className="text-sm font-medium">
                  {university.short_info.country}
                </h6>
              </div>
            </FadeInUpWithSlowBounce>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default InstituteRepresent;
