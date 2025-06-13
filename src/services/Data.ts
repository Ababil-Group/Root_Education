import { Study_Country } from "@/types/country";

export const dummyCountries: Study_Country[] = [
  {
    id: 1,
    country: "Romania",
    slug: "romania",
    flag: "/images/romania_flag.png",
    photo: "/images/romania.jpg",
    route_slug: "Study in Romania",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Romania offers quality education, affordable tuition, vibrant culture, diverse landscapes, and multilingual courses.",
    },
  },
  {
    id: 2,
    country: "Malta",
    slug: "malta",
    flag: "/images/malta_flag.png",
    photo: "/images/malta.png",
    route_slug: "Study in Romania",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Malta for quality education, English-speaking environment, historical charm, beautiful landscapes, and Mediterranean climate.",
    },
  },
  {
    id: 3,
    country: "Hungary",
    slug: "hungary",
    flag: "/images/hungary_flag.png",
    photo: "/images/hungary.png",
    route_slug: "Study in Hungary",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Hungary for affordable tuition, quality education, vibrant culture, historic cities, and beautiful landscapes.",
    },
  },
  {
    id: 4,
    country: "Lithuania",
    slug: "hungary",
    flag: "/images/lithuania_flag.png",
    photo: "/images/lithuania.png",
    route_slug: "Study in Lithuania",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Lithuania: affordable tuition, quality education, vibrant culture, historic charm, beautiful nature, welcoming environment.",
    },
  },
];

export const dummyUniversities = [
  {
    id: 1,
    name: "Spiru haret University, Romania",
    slug: "moscow-state-university",
    description:
      "Spiru Haret University, a private Romanian institution, offers diverse undergraduate and postgraduate programs with a focus on accessibility and quality education.",
    short_info: {
      country: "Romania",
      university_type: "Public",
      total_students: 311928,
      launched: 1991,
    },
    photo: "/images/media/university_photos/UniversityRomania.jpg",
    logo: "/images/media/university_photos/UniversityRomania.jpg",
  },
  {
    id: 3,
    name: "Malta Institute of Management College, Malta",
    slug: "malta-institute-of-management-college",
    description:
      "Malta Institute of Management College provides premier business and management education, focusing on leadership, innovation, and professional development in Malta.",
    short_info: {
      country: "Malta",
      university_type: "Public",
      total_students: 55000,
      launched: 1764,
    },
    photo: "/images/media/university_photos/UniversityMalta.png",
  },
  {
    id: 3,
    name: "Budapest University Of Technology & Economics",
    slug: "moscow-state-university",
    description:
      "Budapest University of Technology & Economics excels in engineering, IT, and business education, fostering innovation and research in Hungary.",
    short_info: {
      country: "Hungary",
      university_type: "Public",
      total_students: 20152,
      launched: 1782,
    },
    photo: "/images/media/university_photos/UniversityHungary.png",
  },

  {
    id: 4,
    name: "Lithuanian University of Health Sciences, Kaunas",
    slug: "Lithuanian-University-of-Health-Sciences-Kaunas",
    description:
      "Lithuanian University of Health Sciences in Kaunas specializes in medical, dental, and pharmaceutical education, emphasizing research and clinical practice excellence.",
    short_info: {
      country: "Lithuania",
      university_type: "Public",
      total_students: 70031,
      launched: 2010,
    },
    photo: "/images/media/university_photos/UniversityLithuanian.png",
  },

  {
    id: 5,
    name: "Riga Stradins Univesity",
    slug: "riga-stradins-university",
    description:
      "Riga Stradins University in Latvia offers diverse programs with a focus on health sciences, social sciences, and engineering in a vibrant city.",
    short_info: {
      country: "Latvia",
      university_type: "Public",
      total_students: 13290,
      launched: 1950,
    },
    photo: "/images/media/university_photos/UnivesityLatvia.png",
  },
  {
    id: 6,
    name: "European Politechnic University, Bulgaria",
    slug: "european-politechnic-university-bulgaria",
    description:
      "European Politechnic University in Bulgaria provides innovative engineering, architecture, and IT programs, emphasizing practical skills and international collaboration.",
    short_info: {
      country: "Bulgaria",
      university_type: "Public",
      total_students: 15000,
      launched: 2010,
    },
    photo: "/images/media/university_photos/UniversityBulgaria.jpg",
  },
  {
    id: 7,
    name: "Georgian Aviation University",
    slug: "georgian-aviation-university-georgia",
    description:
      "Georgian Aviation University specializes in aviation and aerospace education, offering training in piloting, aircraft maintenance, and aerospace engineering.",
    short_info: {
      country: "Georgia",
      university_type: "Public",
      total_students: "No",
      launched: 1992,
    },
    photo: "/images/media/university_photos/GeorgianUniversity.png",
  },
  {
    id: 8,
    name: "Grozny State Oil Technical University",
    slug: "grozny-state-oil-technical-university",
    description:
      "Grozny State Oil Technical University offers specialized education in petroleum engineering and related fields, focusing on industry-relevant skills and research.",
    short_info: {
      country: "Russia",
      university_type: "Public",
      total_students: 7978,
      launched: 1920,
    },
    photo: "/images/media/university_photos/GroznyUniversity.png",
  },
  {
    id: 9,
    name: "MODUL University Vienna",
    slug: "modul-university-vienna",
    description:
      "MODUL University Vienna provides innovative programs in business, public governance, and tourism, emphasizing interdisciplinary learning, research, and global perspectives.",
    short_info: {
      country: "Austria",
      university_type: "Public",
      total_students: 942,
      launched: 2007,
    },
    photo: "/images/media/university_photos/MODULUniversity.png",
  },
  {
    id: 10,
    name: "Impuls Medical Institute",
    slug: "Impuls-Medical-Institute",
    description:
      "Impuls Medical Institute offers advanced education and training in medical sciences, focusing on clinical skills, research, and healthcare innovation.",
    short_info: {
      country: "Uzbekistan",
      university_type: "Public",
      total_students: "No",
      launched: 0,
    },
    photo: "/images/media/university_photos/MedicalInstitute.png",
  },
  {
    id: 11,
    name: "Uskudar University, Istambul",
    slug: "uskudar-university-istambul",
    description:
      "Uskudar University in Istanbul offers diverse programs in health sciences, engineering, and social sciences, emphasizing research, innovation, and practical skills.",
    short_info: {
      country: "Turkey",
      university_type: "Public",
      total_students: 22103,
      launched: 2011,
    },
    photo: "/images/media/university_photos/UskudarUniversity.png",
  },
  {
    id: 12,
    name: "Wittenborg University of Applied Sciences",
    slug: "wittenborg-university-of-applied-sciences",
    description:
      "Wittenborg University of Applied Sciences offers practical business, hospitality, and IT programs, combining industry experience, global perspectives, and innovative education.",
    short_info: {
      country: "Netherlands",
      university_type: "Public",
      total_students: 1100,
      launched: 1987,
    },
    photo: "/images/media/university_photos/WittenborgUniversity.png",
  },
  {
    id: 13,
    name: "Aarhus University",
    slug: "aarhus-university",
    description:
      "Aarhus University offers comprehensive programs in humanities, social sciences, and natural sciences, emphasizing research, innovation, and interdisciplinary learning.",
    short_info: {
      country: "Denmark",
      university_type: "Public",
      total_students: "No",
      launched: 1928,
    },
    photo: "/images/media/university_photos/AarhusUniversity.png",
  },
  {
    id: 14,
    name: "AAS College",
    slug: "aas-college",
    description:
      "AAS College provides practical education in business, design, and technology, emphasizing hands-on experience, industry relevance, and career readiness for students.",
    short_info: {
      country: "Greece",
      university_type: "Public",
      total_students: "No",
      launched: 0,
    },
    photo: "/images/media/university_photos/AASCollege.png",
  },
  {
    id: 15,
    name: "Constanta Maritime University CMU",
    slug: "constant-Maritime-University-CMU",
    description:
      "Constanta Maritime University (CMU) excels in maritime education, offering specialized programs in navigation, engineering, and marine sciences.",
    short_info: {
      country: "Romania",
      university_type: "Public",
      total_students: 4100,
      launched: 1972,
    },
    photo: "/images/media/university_photos/ConstantaUniversity.png",
  },
  {
    id: 16,
    name: "University of Latvia",
    slug: "university-of-latvia",
    description:
      "University of Latvia offers comprehensive programs in humanities, sciences, and social sciences, emphasizing research, innovation, and global perspectives.",
    short_info: {
      country: "Latvia",
      university_type: "Public",
      total_students: 19095,
      launched: 1919,
    },
    photo: "/images/media/university_photos/UniversityLatvia.png",
  },
];
export const universityInfo = {
  about_university: [
    {
      title: "Overview",
      description:
        "This university is one of the top institutions in Europe...",
    },
    {
      title: "History",
      description: "Founded in 1900, it has a long tradition of excellence.",
    },
  ],
  programs: {
    undergraduate_programs: [
      { name: "Computer Science" },
      { name: "Business Administration" },
    ],
    postgraduate_programs: [{ name: "Data Science" }, { name: "MBA" }],
    doctoral_programs: [{ name: "PhD in Artificial Intelligence" }],
  },
  scholarship: {
    short_description: "The university offers a wide range of scholarships.",
    table: [
      {
        scholarship_name: "Merit-Based Scholarship",
        amount: "$5,000",
        eligibility_criteria: "Top 10% academic performance",
        provider: "University Trust Fund",
      },
      {
        scholarship_name: "Need-Based Grant",
        amount: "$3,000",
        eligibility_criteria: "Proven financial need",
        provider: "Government",
      },
    ],
    notes: [
      { title: "Scholarships are renewable each year based on performance." },
      { title: "You must apply separately for scholarships." },
    ],
  },
  application_guide: {
    short_description: "Follow the steps below to apply.",
    guide_list: [
      {
        title: "Step 1",
        description: "Fill out the online application form.",
      },
      {
        title: "Step 2",
        description: "Submit your academic documents.",
      },
      {
        title: "Step 3",
        description: "Attend an interview (if applicable).",
      },
    ],
    bottom_description: "For any questions, contact our admissions office.",
  },
};
