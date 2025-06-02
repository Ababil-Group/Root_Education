import { Study_Country } from "@/types/country";
export const dummyCountries: Study_Country[] = [
  {
    id: 1,
    country: "Canada",
    slug: "canada",
    flag: "/images/media/flags/Canada_Flag.svg",
    photo: "/images/media/city/canada-city.jpg",
    route_slug: "study-in-canada",
    box1: {
      title: "World-Class Education",
      description:
        "Canada offers top-ranked universities with affordable tuition.",
    },
    whystudy: {
      heading: "Why Study in Canada?",
      content: "Canada provides world-class education with diverse culture.",
      whystudylist: [
        {
          heading: "High-Quality Education",
          content:
            "Canadian universities are consistently ranked among the top globally.",
        },
        {
          heading: "Diverse Environment",
          content: "Students experience multiculturalism and inclusiveness.",
        },
        {
          heading: "Affordable Tuition",
          content:
            "Compared to the US and UK, Canada offers affordable education.",
        },
      ],
      short_breaf:
        "Canada is a top choice for international students due to safety, quality, and opportunity.",
    },
    costofliving: {
      heading: "Cost of Living",
      content:
        "Living costs vary by city but are generally reasonable for students.",
      short_breaf: undefined,
      fees: [],
      list: [],
    },
    jobopportunity: {
      heading: "Job Opportunities",
      content:
        "Students can work part-time during studies and full-time during vacations.",
      short_breaf: "Canadian job opportunities for international students.",
      list: [
        {
          title: "Job Opportunities",
          content:
            "Students can work part-time during studies and full-time during vacations.",
          short_breaf: undefined,
        },
        {
          title: "Job Opportunities",
          content:
            "Students can work part-time during studies and full-time during vacations.",
          short_breaf: undefined,
        },
        {
          title: "Job Opportunities",
          content:
            "Students can work part-time during studies and full-time during vacations.",
          short_breaf: undefined,
        },
        {
          title: "Job Opportunities",
          content:
            "Students can work part-time during studies and full-time during vacations.",
          short_breaf: undefined,
        },
      ],
    },
    scholarship: {
      heading: "Scholarships",
      content:
        "Various scholarships available for international students in Canada.",
      scholarshiplist: [
        {
          name: "Scholarship 1",
          content: "Scholarship details and eligibility criteria.",
          criteria: "Eligibility Criteria",
          coverage: "Coverage",
          deadline: "Deadline",
          process: "Application Process",
        },
        {
          name: "Scholarship 2",
          content: "Scholarship details and eligibility criteria.",
          criteria: "Eligibility Criteria",
          coverage: "Coverage",
          deadline: "Deadline",
          process: "Application Process",
        },
        {
          name: "Scholarship 3",
          content: "Scholarship details and eligibility criteria.",
          criteria: "Eligibility Criteria",
          coverage: "Coverage",
          deadline: "Deadline",
          process: "Application Process",
        },
      ],
      short_breaf: undefined,
    },
    application_procedures: {
      steps: [
        "Choose your program",
        "Prepare documents",
        "Submit application",
        "Receive letter of acceptance",
      ],
      short_breaf: undefined,
    },
    admission_requirments: {
      requirements: [
        "Academic transcripts",
        "English proficiency (IELTS/TOEFL)",
        "Statement of Purpose",
        "Letters of recommendation",
      ],
      short_breaf: undefined,
    },
    visaprocedures: {
      steps: [
        "Get acceptance letter",
        "Apply for study permit",
        "Submit biometrics",
        "Receive approval",
      ],
      list: undefined,
    },
    cities: [
      {
        name: "Toronto",
        population: 2930000,
        logo: "",
      },
      {
        name: "Vancouver",
        population: 675000,
        logo: "",
      },
      {
        name: "Montreal",
        population: 1780000,
        logo: "",
      },
    ],
    faq: [
      {
        question: "Can I work in Canada after graduation?",
        answer: "Yes, through the Post-Graduation Work Permit Program.",
      },
    ],
  },
];

export const dummyUniversities = [
  {
    id: 1,
    name: "Moscow State University",
    slug: "moscow-state-university",
    description:
      "Moscow State University is the leading institution of higher education in Russia.",
    short_info: {
      country: "Russia",
      university_type: "Public",
      total_students: 40000,
      launched: 1755,
    },
    photo: "/images/media/university_photos/1.jpg",
    logo: "/images/media/university_logos/25c7c3c3-927a-4166-a28f-e10923ddd59f_0_vFggDGm.png",
    video: "/public/Root education.mp4",
    thumbnail: "/images/university_thumbnails/universities/1-40.jpg",
    about_university: [
      {
        title: "History",
        description:
          "Founded in 1755, MSU is one of the oldest universities in Russia.",
      },
      {
        title: "Campus",
        description:
          "The campus features the famous Stalinist main building and modern facilities.",
      },
    ],
    programs: {
      undergraduate_programs: [
        { name: "Computer Science" },
        { name: "Mechanical Engineering" },
      ],
      postgraduate_programs: [
        { name: "Data Science" },
        { name: "Civil Engineering" },
      ],
      doctoral_programs: [
        { name: "Artificial Intelligence" },
        { name: "Quantum Physics" },
      ],
    },
    scholarship: {
      short_description:
        "MSU provides financial aid and merit-based scholarships for international students.",
      table: [
        {
          scholarship_name: "MSU Global Excellence",
          amount: "$5,000/year",
          eligibility_criteria: "Top 10% applicants, English Proficiency",
          provider: "MSU",
        },
        {
          scholarship_name: "Russian Government Grant",
          amount: "Full tuition + stipend",
          eligibility_criteria: "Merit and need-based",
          provider: "Russian Federation",
        },
      ],
      notes: [
        { title: "All scholarships require annual renewal" },
        { title: "Stipends may vary by program" },
      ],
    },
    application_guide: {
      short_description:
        "Follow the steps below to apply to Moscow State University.",
      guide_list: [
        {
          title: "Choose a Program",
          description: "Explore our catalog and pick the best match for you.",
        },
        {
          title: "Prepare Documents",
          description:
            "Submit transcripts, ID, proof of language proficiency, and application fee.",
        },
        {
          title: "Interview",
          description: "Some programs require an online interview.",
        },
      ],
      bottom_description:
        "You will be notified via email once your application is reviewed.",
    },
  },
  {
    id: 2,
    name: "University of Toronto",
    slug: "university-of-toronto",
    description: "One of Canada's top-ranked research universities.",
    short_info: {
      country: "Canada",
      university_type: "Public",
      total_students: 91000,
      launched: 1827,
    },
    photo: "/images/media/university_photos/2.jpg",
    logo: "/images/media/university_logos/uoft-logo.png",
    video: "/public/UofT-campus-tour.mp4",
    thumbnail: "/images/university_thumbnails/universities/2-40.jpg",
    about_university: [
      {
        title: "World Ranking",
        description:
          "Consistently ranked in the top 30 globally for innovation and research.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Psychology" }, { name: "Finance" }],
      postgraduate_programs: [{ name: "MBA" }, { name: "Biotech" }],
      doctoral_programs: [{ name: "Neuroscience" }],
    },
    scholarship: {
      short_description: "Offers many merit and need-based awards.",
      table: [
        {
          scholarship_name: "Lester B. Pearson Scholarship",
          amount: "Full tuition + living expenses",
          eligibility_criteria: "International students with leadership skills",
          provider: "UofT",
        },
      ],
      notes: [{ title: "Requires separate application" }],
    },
    application_guide: {
      short_description: "3-step online application process.",
      guide_list: [
        {
          title: "Apply Online",
          description: "Use the UofT portal to begin your application.",
        },
      ],
      bottom_description: "Submit documents before the deadline.",
    },
  },
  {
    id: 3,
    name: "University of Tokyo",
    slug: "university-of-tokyo",
    description: "Japan’s top university known for STEM excellence.",
    short_info: {
      country: "Japan",
      university_type: "Public",
      total_students: 28000,
      launched: 1877,
    },
    photo: "/images/media/university_photos/3.jpg",
    logo: "/images/media/university_logos/utokyo-logo.png",
    video: "/public/Tokyo-University.mp4",
    thumbnail: "/images/university_thumbnails/universities/3-40.jpg",
    about_university: [
      {
        title: "Global Excellence",
        description:
          "Collaborates with top institutions and companies globally.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Engineering" }],
      postgraduate_programs: [{ name: "Robotics" }],
      doctoral_programs: [{ name: "Applied Physics" }],
    },
    scholarship: {
      short_description: "MEXT and university-funded aid available.",
      table: [
        {
          scholarship_name: "MEXT Scholarship",
          amount: "$1,000/month + tuition",
          eligibility_criteria: "International students via embassy selection",
          provider: "Japanese Government",
        },
      ],
      notes: [{ title: "Apply through embassy" }],
    },
    application_guide: {
      short_description: "Steps differ for each program.",
      guide_list: [
        {
          title: "Embassy Nomination",
          description: "First step for MEXT applicants.",
        },
      ],
      bottom_description: "Contact department for detailed guide.",
    },
  },
  {
    id: 4,
    name: "Technical University of Munich",
    slug: "technical-university-of-munich",
    description: "TUM is a top European university for innovation.",
    short_info: {
      country: "Germany",
      university_type: "Public",
      total_students: 48000,
      launched: 1868,
    },
    photo: "/images/media/university_photos/4.jpg",
    logo: "/images/media/university_logos/tum-logo.png",
    video: "/public/TUM-video.mp4",
    thumbnail: "/images/university_thumbnails/universities/4-40.jpg",
    about_university: [
      {
        title: "Excellence Initiative",
        description:
          "TUM is part of Germany’s Excellence Strategy and offers elite programs.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Computer Engineering" }],
      postgraduate_programs: [{ name: "Machine Learning" }],
      doctoral_programs: [{ name: "Data Engineering" }],
    },
    scholarship: {
      short_description: "Numerous scholarships for EU and non-EU students.",
      table: [
        {
          scholarship_name: "DAAD Scholarship",
          amount: "Variable",
          eligibility_criteria: "Academic merit, motivation letter",
          provider: "DAAD",
        },
      ],
      notes: [{ title: "Check DAAD website for more info" }],
    },
    application_guide: {
      short_description: "Application is online and mostly in English.",
      guide_list: [
        {
          title: "Uni-Assist Process",
          description: "International students apply via Uni-Assist.",
        },
      ],
      bottom_description: "Interview for some master's programs.",
    },
  },
  {
    id: 5,
    name: "University of Melbourne",
    slug: "university-of-melbourne",
    description: "Australia's leading comprehensive university.",
    short_info: {
      country: "Australia",
      university_type: "Public",
      total_students: 54000,
      launched: 1853,
    },
    photo: "/images/media/university_photos/5.jpg",
    logo: "/images/media/university_logos/melbourne-logo.png",
    video: "/public/melbourne-university.mp4",
    thumbnail: "/images/university_thumbnails/universities/5-40.jpg",
    about_university: [
      {
        title: "Academic Reputation",
        description:
          "Ranked #1 in Australia and top 50 worldwide for academic strength.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Law" }, { name: "Architecture" }],
      postgraduate_programs: [{ name: "Public Health" }],
      doctoral_programs: [{ name: "Law & Policy" }],
    },
    scholarship: {
      short_description:
        "Generous scholarships for local and international students.",
      table: [
        {
          scholarship_name: "Melbourne International Scholarship",
          amount: "Up to $10,000",
          eligibility_criteria: "Academic excellence",
          provider: "University of Melbourne",
        },
      ],
      notes: [{ title: "Automatically considered when applying" }],
    },
    application_guide: {
      short_description: "Standard online process via university portal.",
      guide_list: [
        {
          title: "Register Online",
          description: "Create an account on the university website.",
        },
      ],
      bottom_description: "No application fee for some programs.",
    },
  },
];
