import PageBanner from "@/components/common/PageBanner";
import TabSection from "@/components/pages/universities/university_details/TabsSection";
import TopSection from "@/components/pages/universities/university_details/TopSection";
import { formatCountryRoute } from "@/lib/utils";
import { dummyUniversities } from "@/services/Data";
import { UniversityInfo } from "@/types/university";
import { notFound } from "next/navigation";

type TUniversityDetailsPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: TUniversityDetailsPageProps) {
  const { slug } = params;

  return {
    title: `Root Education | ${formatCountryRoute(slug)}`,
  };
}

const UniversityDetailsPage = async ({
  params,
}: TUniversityDetailsPageProps) => {
  const university = dummyUniversities.find(
    (item) => item.slug === params.slug,
  );

  if (!university) {
    notFound();
  }

  const universityInfo: UniversityInfo = {
    name: university.name,
    image: typeof university.photo === "string" ? university.photo : undefined,
    thumbnail:
      typeof university.photo === "string" ? university.photo : undefined,
    photo: university.photo,
    short_info: university.short_info,
    about_university: [
      {
        title: "Overview",
        description: university.description,
      },
      {
        title: "Campus Life",
        description: `Study at ${university.name}, located in ${university.short_info.country}, with strong international student support and modern facilities.`,
      },
    ],
    programs: {
      undergraduate_programs: [
        { name: "Business Administration" },
        { name: "Computer Science" },
      ],
      postgraduate_programs: [
        { name: "MSc in Applied Sciences" },
        { name: "MSc in Management" },
      ],
      doctoral_programs: [{ name: "PhD in Research" }],
    },
    scholarship: {
      short_description:
        "Scholarships are available for qualified international students.",
      table: [
        {
          scholarship_name: "International Merit Scholarship",
          amount: "$3,000",
          eligibility_criteria: "Strong academic record",
          provider: university.name,
        },
        {
          scholarship_name: "Academic Excellence Grant",
          amount: "$2,000",
          eligibility_criteria: "Top-performing applicants",
          provider: university.name,
        },
      ],
      notes: [
        {
          title:
            "Scholarship offers vary by program and may require a separate application.",
        },
      ],
    },
    application_guide: {
      short_description: "Submit your documents through the university portal.",
      guide_list: [
        {
          title: "Step 1",
          description: "Complete the online application form.",
        },
        {
          title: "Step 2",
          description: "Upload academic transcripts and English scores.",
        },
        {
          title: "Step 3",
          description: "Submit any required recommendation letters.",
        },
      ],
      bottom_description:
        "Contact admissions for entry requirements and deadlines.",
    },
    admission: [
      {
        title: "Admission Requirements",
        description:
          "Meet the university entry criteria, such as language, grades, and documents.",
      },
      {
        title: "Interview or Entrance Exam",
        description: "Some programs may require an interview or entrance test.",
      },
    ],
  };

  return (
    <main>
      <PageBanner PageName={university.name} />
      <TopSection universityInfo={universityInfo} />
      <TabSection universityInfo={universityInfo} />
    </main>
  );
};

export default UniversityDetailsPage;
