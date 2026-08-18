import { Study_Country } from "@/types/country";

export const countriesInfo = {
  romania: {
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
        { title: "Step 2", description: "Submit your academic documents." },
        {
          title: "Step 3",
          description: "Attend an interview (if applicable).",
        },
      ],
      bottom_description: "For any questions, contact our admissions office.",
    },
  },
  malta: {
    about_university: [
      {
        title: "Overview",
        description:
          "The University of Malta offers high-quality education with a Mediterranean focus.",
      },
      {
        title: "History",
        description:
          "Founded in 1592, it is one of the oldest universities in the world.",
      },
    ],
    programs: {
      undergraduate_programs: [
        { name: "Medicine and Surgery" },
        { name: "Law" },
        { name: "Economics" },
      ],
      postgraduate_programs: [
        { name: "MSc in Digital Games" },
        { name: "MA in European Politics" },
      ],
      doctoral_programs: [{ name: "PhD in Oceanography" }],
    },
    scholarship: {
      short_description:
        "Malta offers government and university scholarships for international students.",
      table: [
        {
          scholarship_name: "TESLA Scholarship",
          amount: "€4,000",
          eligibility_criteria: "High academic achievement",
          provider: "Malta Government",
        },
        {
          scholarship_name: "International Excellence Award",
          amount: "€2,500",
          eligibility_criteria: "Top 15% of applicants",
          provider: "University of Malta",
        },
      ],
      notes: [
        { title: "Scholarships cover partial tuition only." },
        { title: "Separate application deadline: March 31." },
      ],
    },
    application_guide: {
      short_description: "Apply through the central admissions portal.",
      guide_list: [
        {
          title: "Step 1",
          description: "Create an account on the University Portal.",
        },
        {
          title: "Step 2",
          description: "Upload transcripts and English test scores.",
        },
        { title: "Step 3", description: "Pay the €50 application fee." },
      ],
      bottom_description: "Visa process takes 4-6 weeks after acceptance.",
    },
  },
  cyprus: {
    about_university: [
      {
        title: "Overview",
        description:
          "Cyprus is a hub for EU-accredited degrees with affordable tuition.",
      },
      {
        title: "History",
        description:
          "Modern universities emerged in the 1980s, but education roots go back centuries.",
      },
    ],
    programs: {
      undergraduate_programs: [
        { name: "Hospitality Management" },
        { name: "Pharmacy" },
      ],
      postgraduate_programs: [
        { name: "MSc in Renewable Energy" },
        { name: "MBA" },
      ],
      doctoral_programs: [{ name: "PhD in Neuroscience" }],
    },
    scholarship: {
      short_description:
        "Scholarships available from the Cyprus Government and local universities.",
      table: [
        {
          scholarship_name: "Cyprus International Scholarship",
          amount: "€3,000/year",
          eligibility_criteria: "GPA 3.5+",
          provider: "Ministry of Education",
        },
        {
          scholarship_name: "Early Bird Discount",
          amount: "10% tuition",
          eligibility_criteria: "Apply by May 1",
          provider: "University of Cyprus",
        },
      ],
      notes: [
        { title: "Some scholarships require Greek language basics." },
        { title: "Renewable yearly with good standing." },
      ],
    },
    application_guide: {
      short_description: "Submit documents online via university website.",
      guide_list: [
        { title: "Step 1", description: "Complete the online application." },
        { title: "Step 2", description: "Get two recommendation letters." },
        {
          title: "Step 3",
          description: "Provide proof of English (IELTS 6.5).",
        },
      ],
      bottom_description:
        "Student visa allows part-time work up to 20 hrs/week.",
    },
  },
  hungary: {
    about_university: [
      {
        title: "Overview",
        description:
          "Hungary is famous for medical and engineering degrees, especially in Budapest.",
      },
      {
        title: "History",
        description:
          "The University of Szeged was founded in 1581, with strong research tradition.",
      },
    ],
    programs: {
      undergraduate_programs: [
        { name: "General Medicine" },
        { name: "Civil Engineering" },
      ],
      postgraduate_programs: [
        { name: "MSc in Computer Science" },
        { name: "MA in International Relations" },
      ],
      doctoral_programs: [{ name: "PhD in Chemistry" }],
    },
    scholarship: {
      short_description:
        "Stipendium Hungaricum is the main government scholarship.",
      table: [
        {
          scholarship_name: "Stipendium Hungaricum",
          amount: "Full tuition + stipend",
          eligibility_criteria: "All international students",
          provider: "Hungarian Government",
        },
        {
          scholarship_name: "Christian Nagy Scholarship",
          amount: "€2,000",
          eligibility_criteria: "Top 5% in entrance exam",
          provider: "Budapest University",
        },
      ],
      notes: [
        { title: "Stipendium covers housing and health insurance." },
        { title: "Application opens in November." },
      ],
    },
    application_guide: {
      short_description: "Most programs require entrance exam or interview.",
      guide_list: [
        { title: "Step 1", description: "Register on the Stipendium portal." },
        {
          title: "Step 2",
          description: "Submit school leaving certificate and transcript.",
        },
        {
          title: "Step 3",
          description: "Take online entrance test (if medical).",
        },
      ],
      bottom_description: "Acceptance rate ~20% for medicine programs.",
    },
  },
  uk: {
    about_university: [
      {
        title: "Overview",
        description:
          "UK universities are world-renowned, with degrees recognized globally.",
      },
      {
        title: "History",
        description:
          "Oxford and Cambridge date back to the 12th–13th centuries.",
      },
    ],
    programs: {
      undergraduate_programs: [
        { name: "Law" },
        { name: "Mechanical Engineering" },
      ],
      postgraduate_programs: [
        { name: "MSc in Artificial Intelligence" },
        { name: "MA in Creative Writing" },
      ],
      doctoral_programs: [{ name: "PhD in Economics" }],
    },
    scholarship: {
      short_description:
        "Chevening, Commonwealth, and university-specific scholarships available.",
      table: [
        {
          scholarship_name: "Chevening Scholarship",
          amount: "Full tuition + living costs",
          eligibility_criteria:
            "Leadership potential + 2 years work experience",
          provider: "UK Government",
        },
        {
          scholarship_name: "GREAT Scholarship",
          amount: "£10,000",
          eligibility_criteria: "Citizens of eligible countries",
          provider: "British Council",
        },
      ],
      notes: [
        { title: "Chevening deadline is usually November." },
        { title: "Separate scholarship essays required." },
      ],
    },
    application_guide: {
      short_description:
        "Apply via UCAS for undergraduate, directly for postgraduate.",
      guide_list: [
        {
          title: "Step 1",
          description: "Choose course and check entry requirements.",
        },
        { title: "Step 2", description: "Write a personal statement." },
        {
          title: "Step 3",
          description: "Submit application and pay fee (£22 for UCAS).",
        },
      ],
      bottom_description:
        "Student visa allows part-time work during term time.",
    },
  },
  greece: {
    about_university: [
      {
        title: "Overview",
        description:
          "Greece offers EU-recognized degrees, a rich academic heritage, and an affordable Mediterranean lifestyle.",
      },
      {
        title: "History",
        description:
          "The National and Kapodistrian University of Athens was founded in 1837, one of the oldest in the Mediterranean.",
      },
    ],
    programs: {
      undergraduate_programs: [
        { name: "Business Administration" },
        { name: "Tourism and Hospitality Management" },
      ],
      postgraduate_programs: [
        { name: "MSc in Shipping Management" },
        { name: "MA in Archaeology" },
      ],
      doctoral_programs: [{ name: "PhD in Marine Sciences" }],
    },
    scholarship: {
      short_description:
        "Scholarships available through IKY (State Scholarships Foundation) and university funds.",
      table: [
        {
          scholarship_name: "IKY State Scholarship",
          amount: "€3,500/year",
          eligibility_criteria: "Strong academic record",
          provider: "State Scholarships Foundation",
        },
        {
          scholarship_name: "International Student Grant",
          amount: "€1,500",
          eligibility_criteria: "Proven financial need",
          provider: "University of Athens",
        },
      ],
      notes: [
        { title: "Scholarships are subject to annual academic review." },
        { title: "Applications open each spring." },
      ],
    },
    application_guide: {
      short_description: "Apply directly through the university's admissions office.",
      guide_list: [
        {
          title: "Step 1",
          description: "Submit the online application with academic transcripts.",
        },
        {
          title: "Step 2",
          description: "Provide proof of English or Greek language proficiency.",
        },
        {
          title: "Step 3",
          description: "Attend an interview or entrance assessment (if required).",
        },
      ],
      bottom_description: "Student visa processing typically takes 4-8 weeks.",
    },
  },
};

export const dummyCountries: Study_Country[] = [
  {
    id: 1,
    country: "Romania",
    slug: "romania",
    flag: "https://flagcdn.com/w320/ro.png",
    photo:
      "https://images.pexels.com/photos/28898472/pexels-photo-28898472.jpeg",
    route_slug: "Study in Romania",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Romania for quality education, English-speaking programs, rich history, and affordable tuition.",
    },
    countryinfo: countriesInfo["romania"],
  },
  {
    id: 2,
    country: "Malta",
    slug: "malta",
    flag: "https://flagcdn.com/w320/mt.png",
    photo:
      "https://images.pexels.com/photos/17404652/pexels-photo-17404652.jpeg",
    route_slug: "Study in Malta",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Malta for a Mediterranean experience, English-speaking environment, and historic universities.",
    },
    countryinfo: countriesInfo["malta"],
  },
  {
    id: 3,
    country: "Hungary",
    slug: "hungary",
    flag: "https://flagcdn.com/w320/hu.png",
    photo:
      "https://images.pexels.com/photos/18815996/pexels-photo-18815996.jpeg",
    route_slug: "Study in Hungary",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Hungary for top medical and engineering programs, central location in Europe, and affordable living.",
    },
    countryinfo: countriesInfo["hungary"],
  },
  {
    id: 4,
    country: "Cyprus",
    slug: "cyprus",
    flag: "https://flagcdn.com/w320/cy.png",
    photo:
      "https://images.pexels.com/photos/29548810/pexels-photo-29548810.jpeg  ",
    route_slug: "Study in Cyprus",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Cyprus for quality education, English-speaking environment, historical charm, beautiful landscapes, and Mediterranean climate.",
    },
    countryinfo: countriesInfo["cyprus"],
  },
  {
    id: 5,
    country: "UK",
    slug: "uk",
    flag: "https://flagcdn.com/w320/gb.png",
    photo:
      "https://images.pexels.com/photos/29101507/pexels-photo-29101507.jpeg",
    route_slug: "Study in UK",
    box1: {
      title: "World-Class Education",
      description:
        "Study in the UK for globally recognized degrees, rich academic tradition, and diverse career opportunities.",
    },
    countryinfo: countriesInfo["uk"],
  },
  {
    id: 6,
    country: "Greece",
    slug: "greece",
    flag: "https://flagcdn.com/w320/gr.png",
    photo:
      "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
    route_slug: "Study in Greece",
    box1: {
      title: "World-Class Education",
      description:
        "Study in Greece for EU-recognized degrees, a rich historical heritage, affordable living, and a warm Mediterranean climate.",
    },
    countryinfo: countriesInfo["greece"],
  },
];

export const dummyUniversities = [
  {
    id: 1,
    name: "Spiru haret University, Romania",
    slug: "spiru-haret-university-romania",
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
    id: 2,
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
    slug: "budapest-university-of-technology-and-economics",
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
  {
    id: 17,
    name: "Angel Kanchev University of Ruse",
    slug: "angel-kanchev-university-of-ruse",
    description:
      "'Angel Kanchev' University of Ruse provides diverse programs in engineering, economics, and humanities, focusing on research, innovation, and practical skills.",
    short_info: {
      country: "Bulgaria",
      university_type: "Public",
      total_students: 10000,
      launched: 1945,
    },
    photo: "/images/media/university_photos/AngelUniversity.png",
  },
  {
    id: 18,
    name: "Nişantaşı University agency",
    slug: "nisantasi-university-agency",
    description:
      "Nişantaşı University provides innovative programs across business, design, and technology fields, focusing on practical skills and industry partnerships.",
    short_info: {
      country: "Turkey",
      university_type: "Public",
      total_students: "No",
      launched: 2012,
    },
    photo: "/images/media/university_photos/NişantaşıUniversity.png",
  },
  {
    id: 19,
    name: "University of Copenhegen",
    slug: "university-of-copenhegen",
    description:
      "The University of Copenhagen offers diverse programs across disciplines, focusing on research excellence, interdisciplinary collaboration, and global perspectives in education.",
    short_info: {
      country: "Denmark",
      university_type: "Public",
      total_students: 36897,
      launched: 1479,
    },
    photo: "/images/media/university_photos/UniversityCopenhegen.png",
  },
  {
    id: 20,
    name: "Romanian - American University",
    slug: "romanian-american-university",
    description:
      "Romanian-American University fosters global perspectives, offering diverse programs in business, law, and IT with a focus on American education standards.",
    short_info: {
      country: "Romania",
      university_type: "Public",
      total_students: "No",
      launched: 1991,
    },
    photo: "/images/media/university_photos/AmericanUniversity.png",
  },
  {
    id: 21,
    name: "Technical University of Denmark",
    slug: "technical-university-of-denmark",
    description:
      "Technical University of Denmark excels in engineering and technology education, emphasizing innovation, research, and practical skills for global industry impact.",
    short_info: {
      country: "Denmark",
      university_type: "Public",
      total_students: 13414,
      launched: 1829,
    },
    photo: "/images/media/university_photos/TechnicalUniversity.png",
  },
  {
    id: 22,
    name: "Think Talent, Malta",
    slug: "the-university-of-edinburgh",
    description:
      "Think Talent, Malta provides professional development and training solutions, enhancing skills and careers through tailored programs and expert guidance.",
    short_info: {
      country: "Malta",
      university_type: "Public",
      total_students: "No",
      launched: 0,
    },
    photo: "/images/media/university_photos/MaltaUniversity.png",
  },
  {
    id: 23,
    name: "John Von Neumann University",
    slug: "john-von-neumann-university",
    description:
      "John von Neumann University specializes in IT, engineering, and economics, combining rigorous academic training with innovative research opportunities in Hungary.",
    short_info: {
      country: "Hungary",
      university_type: "Public",
      total_students: "No",
      launched: 2000,
    },
    photo: "/images/media/university_photos/JohnUniversity.png",
  },
  {
    id: 24,
    name: "Kauno Techniko Kolegija",
    slug: "kauno-techniko-kolegija",
    description:
      "Kauno Techniko Kolegija provides applied education in engineering, technology, and business, focusing on practical skills and industry collaboration.",
    short_info: {
      country: "Lithuania",
      university_type: "Public",
      total_students: "No",
      launched: 1920,
    },
    photo: "/images/media/university_photos/KaunoUniversity.png",
  },
  {
    id: 25,
    name: "Naval Academy of Varna, Bulgaria",
    slug: "naval-academy-of-varna-bulgaria",
    description:
      "Naval Academy of Varna in Bulgaria offers specialized education in naval and maritime sciences, emphasizing engineering, navigation, and maritime safety.",
    short_info: {
      country: "Bulgaria",
      university_type: "Public",
      total_students: "No",
      launched: 1881,
    },
    photo: "/images/media/university_photos/NavalUniversity.png",
  },
  {
    id: 26,
    name: "Copenhagen Business School",
    slug: "copenhagen-business-school",
    description:
      "Copenhagen Business School delivers top-tier business education with a focus on innovation, global perspectives, and practical skills across diverse industries.",
    short_info: {
      country: "Denmark",
      university_type: "Public",
      total_students: 222829,
      launched: 1917,
    },
    photo: "/images/media/university_photos/CopenhagenUniversity.png",
  },
  {
    id: 27,
    name: "EEC-ITIS,",
    slug: "eec-itis-malta",
    description:
      "EEC-ITIS Malta specializes in vocational education, offering programs in tourism, hospitality, and information technology to enhance career opportunities.",
    short_info: {
      country: "Malta",
      university_type: "Public",
      total_students: "No",
      launched: 2008,
    },
    photo: "/images/media/university_photos/EECUniversity.png",
  },
  {
    id: 28,
    name: "Wekerle Business School and Psychology",
    slug: "wekerle-business-school-and-psychology",
    description:
      "Wekerle Business School and Psychology integrates business strategies with psychological insights, equipping students with unique skills for leadership and organizational success.",
    short_info: {
      country: "Hungary",
      university_type: "Public",
      total_students: "No",
      launched: 2006,
    },
    photo: "/images/media/university_photos/WekerleUniversity.png",
  },
  {
    id: 29,
    name: "Roskilde University",
    slug: "roskilde-university",
    description:
      "Roskilde University provides interdisciplinary education with a focus on research, problem-solving, and collaborative learning, preparing students for global challenges and careers.",
    short_info: {
      country: "Denmark",
      university_type: "Public",
      total_students: 9500,
      launched: 1992,
    },
    photo: "/images/media/university_photos/RoskildeUniversity.png",
  },
  {
    id: 30,
    name: "Three Sixty College",
    slug: "three-sixty-college",
    description:
      "Three Sixty College provides flexible, career-oriented programs in various fields, focusing on practical skills and industry-relevant knowledge for success.",
    short_info: {
      country: "Malta",
      university_type: "Public",
      total_students: 15000,
      launched: 1949,
    },
    photo: "/images/media/university_photos/ThreeUniversity.png",
  },
  {
    id: 31,
    name: "MUV College, Malta",
    slug: "muv-college-malta",
    description:
      "MUV College in Malta offers diverse programs in business, IT, and hospitality, emphasizing practical skills and career readiness.",
    short_info: {
      country: "Malta",
      university_type: "Public",
      total_students: 11000,
      launched: "No",
    },
    photo: "/images/media/university_photos/MUVCollege.png",
  },
  {
    id: 32,
    name: "University of Miskolc, Hungary",
    slug: "university-of-miskolc-hungary",
    description:
      "University of Miskolc in Hungary offers diverse programs in engineering, economics, and social sciences, emphasizing research, innovation, and practical skills.",
    short_info: {
      country: "Hungary",
      university_type: "Public",
      total_students: 15000,
      launched: 1949,
    },
    photo: "/images/media/university_photos/UniversityMiskolc.png",
  },
  {
    id: 33,
    name: "Vilnius University",
    slug: "vilnius-university-lithuania",
    description:
      "Vilnius University in Lithuania offers a wide range of academic programs, fostering research, innovation, and critical thinking across diverse disciplines.",
    short_info: {
      country: "Lithuania",
      university_type: "Public",
      total_students: 15000,
      launched: 1949,
    },
    photo: "/images/media/university_photos/VilniusUniversity.png",
  },
  {
    id: 34,
    name: "University of Nyíregyháza",
    slug: "university-of-nyireghaza-hungary",
    description:
      "University of Nyíregyháza provides comprehensive education in arts, sciences, and social sciences, focusing on research, community engagement, and practical training.",
    short_info: {
      country: "Hungary",
      university_type: "Public",
      total_students: 5000,
      launched: 2000,
    },
    photo: "/images/media/university_photos/UniversityNyíregyháza.png",
  },
  {
    id: 35,
    name: "University of Szeged",
    slug: "university-of-szeged-hungary",
    description:
      "Aalborg University offers problem-based learning and interdisciplinary research, preparing students with innovative skills and critical thinking for global challenges.",
    short_info: {
      country: "Denmark",
      university_type: "Public",
      total_students: 17700,
      launched: 1974,
    },
    photo: "/images/media/university_photos/AalborgUniversity.png",
  },
  {
    id: 36,
    name: "City Unity College",
    slug: "city-unity-college",
    description:
      "City Unity College offers diverse programs in business, design, and technology, focusing on practical skills, innovation, and industry connections for success.",
    short_info: {
      country: "Greece",
      university_type: "Public",
      total_students: "No",
      launched: 2004,
    },
    photo: "/images/media/university_photos/CityCollege.png",
  },
  {
    id: 37,
    name: "Uzhhorod National University",
    slug: "uzhhorod-national-university-ukraine",
    description:
      "Uzhhorod National University, located in Ukraine, offers diverse academic programs and fosters research and innovation in a vibrant educational environment.",
    short_info: {
      country: "Ukraine",
      university_type: "Public",
      total_students: 13600,
      launched: 1945,
    },
    photo: "/images/media/university_photos/UzhhorodUniversity.png",
  },
  {
    id: 38,
    name: "Dublin Business School",
    slug: "dublin-business-school-ukraine",
    description:
      "Dublin Business School offers diverse business programs, emphasizing practical skills and career readiness in a dynamic learning environment.",
    short_info: {
      country: "Ireland",
      university_type: "Public",
      total_students: 9000,
      launched: 1975,
    },
    photo: "/images/media/university_photos/DublinSchool.png",
  },
  {
    id: 39,
    name: "Belgrade Business School",
    slug: "belgrade-business-school",
    description:
      "Belgrade Business School delivers quality education in business and management, fostering critical thinking and practical skills for future leaders in Serbia.",
    short_info: {
      country: "Serbia",
      university_type: "Public",
      total_students: "No",
      launched: 1956,
    },
    photo: "/images/media/university_photos/BelgradeSchool.png",
  },
];
