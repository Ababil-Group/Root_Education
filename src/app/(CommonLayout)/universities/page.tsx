import PageBanner from "@/components/common/PageBanner";
import UniversitiesWeRepresent from "@/components/pages/universities/UniversitiesWeRepresent";
// import { getAllUniversities } from "@/services/getAllUniversities";
import { dummyUniversities } from "@/services/Data";
import { University } from "@/types/university";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Universities",
};

// type UniversitiesPageProps = {
//   searchParams: Record<string, string | string[] | undefined>;
// };

const UniversitiesPage = async () => {
  const universityData = dummyUniversities as University[];

  return (
    <main>
      <PageBanner PageName="Universities" />
      <UniversitiesWeRepresent universityData={universityData} />
    </main>
  );
};

export default UniversitiesPage;
