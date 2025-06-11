export type University = {
  id?: number;

  name: string;

  slug?: string;

  description: string;

  short_info: {
    country: string;
    university_type: string;
    total_students: number | undefined;
    launched: number | undefined;
  };

  photo?: File | null | FileList | string;
};

export interface AboutUniversity {
  title: string;
  description: string;
}

export interface Program {
  name: string;
  description?: string;
}

export interface ScholarshipTableItem {
  scholarship_name: string;
  amount: string;
  eligibility_criteria: string;
  provider: string;
}

export interface ScholarshipNote {
  title: string;
}

export interface Scholarship {
  short_description: string;
  table: ScholarshipTableItem[];
  notes: ScholarshipNote[];
}

export interface ApplicationGuideItem {
  title: string;
  description: string;
}

export interface ApplicationGuide {
  short_description: string;
  guide_list: ApplicationGuideItem[];
  bottom_description: string;
}

export interface Programs {
  undergraduate_programs: Program[];
  postgraduate_programs: Program[];
  doctoral_programs: Program[];
}

export interface UniversityInfo {
  name: string;
  image?: string;
  thumbnail?: string;
  photo?: string | File | FileList | null;
  short_info: {
    country: string;
    university_type: string;
    total_students?: number;
    launched?: number | string;
  };
  about_university: AboutUniversity[];
  programs: Programs;
  scholarship: Scholarship;
  application_guide: ApplicationGuide;
  admission: AboutUniversity[];
}

export type GuideList = {
  title: string;
  description: string;
};

export type UndergraduateProgram = {
  name: string;
};

export type PostgraduateProgram = {
  name: string;
};

export type DoctoralProgram = {
  name: string;
};

export type Table = {
  scholarship_name: string;
  amount: string;
  eligibility_criteria: string;
  provider: string;
};

export type Note = {
  title: string;
};
