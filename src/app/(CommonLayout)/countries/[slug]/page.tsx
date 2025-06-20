import PageBanner from "@/components/common/PageBanner";
import AccordionSection from "@/components/pages/countries/country_details/AccordionSection";
import BestCities from "@/components/pages/countries/country_details/BestCities";
import FAQ from "@/components/pages/countries/country_details/FAQ";
import InstituteRepresent from "@/components/pages/countries/country_details/InstituteRepresent";
import TabsSection from "@/components/pages/countries/country_details/TabsSection";
import TopSection from "@/components/pages/countries/country_details/TopSection";
import { formatCountryRoute } from "@/lib/utils";
// import { getAllUniversities } from "@/services/getAllUniversities";
// import { getCountryBySlug } from "@/services/getCountryBySlug";
import { dummyCountries } from "@/services/Data";
// import { University } from "@/types/university";

type TCountryDetailsPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: TCountryDetailsPageProps) {
  const { slug } = params;

  return {
    title: `Root Education | ${formatCountryRoute(slug)}`,
  };
}

const CountryDetailsPage = async ({ params }: TCountryDetailsPageProps) => {
  const { slug } = params;

  // const countryInfo = await getCountryBySlug(slug);
  // const universitiesData = await getAllUniversities();
  // const universities = universitiesData.results;
  // const universities = dummyUniversities;
  const countryInfo = dummyCountries[0];

  // const partnerUniversities = universities.filter(
  //   (university: University) =>
  //     university.short_info.country === countryInfo.country,
  // );

  return (
    <main>
      <PageBanner PageName={formatCountryRoute(slug)} />

      <TopSection countryInfo={countryInfo} />

      <TabsSection />

      <AccordionSection />

      {/* <BestCities countryInfo={countryInfo} /> */}
      <BestCities />
      <InstituteRepresent />
      {/* {partnerUniversities.length >= 1 && (
        <InstituteRepresent partnerUniversities={partnerUniversities} />
      )} */}

      <FAQ />
    </main>
  );
};

export default CountryDetailsPage;
