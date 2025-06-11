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
  },
  {
    id: 2,
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
    id: 3,
    name: "Three Sixty College",
    slug: "moscow-state-university",
    description:
      "Three Sixty College provides flexible, career-oriented programs in various fields, focusing on practical skills and industry-relevant knowledge for success.",
    short_info: {
      country: "Malta",
      university_type: "Public",
      total_students: 15000,
      launched: 1949,
    },
    photo: "/images/media/university_photos/UniversityMalta.png",
  },
  {
    id: 4,
    name: "John Von Neumann University",
    slug: "moscow-state-university",
    description:
      "John von Neumann University specializes in IT, engineering, and economics, combining rigorous academic training with innovative research opportunities in Hungary.",
    short_info: {
      country: "Hungary",
      university_type: "Public",
      total_students: 150450,
      launched: 2000,
    },
    photo: "/images/media/university_photos/UniversityHungary2.png",
  },
  {
    id: 5,
    name: "European Politechnic University, Bulgaria",
    slug: "moscow-state-university",
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
    id: 6,
    name: "Riga Stradins Univesity",
    slug: "moscow-state-university",
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
