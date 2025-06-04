import Section from "@/components/common/Section";
import UniversityCard from "@/components/common/UniversityCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { dummyUniversities } from "@/services/Data";
import { University } from "@/types/university";
const OurPartnersUniversity = async () => {
  // const universityData = await getAllUniversities({ limit: 6 });

  // const universities = universityData.results;

  const universities = dummyUniversities;

  return (
    <Section
      sectionName="Our Partners University"
      title="World-Class Educational Collaborations"
    >
      <div className="container grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 2xl:grid-cols-3">
        {universities?.map(
          (university: University, index: number) =>
            index < 6 && <UniversityCard university={university} key={index} />,
        )}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link href="/universities">
          <Button>View All Universities</Button>
        </Link>
      </div>
    </Section>
  );
};

export default OurPartnersUniversity;
