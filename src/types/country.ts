// export type Study_Country = {
//   id: number;

import { ReactNode } from "react";

//   country: string;

//   slug: string;

//   flag?: File | null | FileList | string;

//   photo?: File | null | FileList | string;

//   route_slug: string;

//   box1: Box1;

//   whystudy: Whystudy;

//   costofliving: Costofliving;

//   jobopportunity: Jobopportunity;

//   scholarship: Scholarship;

//   application_procedures: ApplicationProcedure;

//   admission_requirments: AdmissionRequirment;

//   visaprocedures: Visaprocedure;

//   cities: City[];

//   faq: Faq[];
// };
export type Box1 = {
  title: string;
  description: string;
};

export type Whystudy = {
  whystudylist: unknown;
  short_breaf: ReactNode;
  heading: string;
  content: string;
};

export type Costofliving = {
  short_breaf: ReactNode;
  fees: Fee[];
  list: List[];
  heading: string;
  content: string;
};

export type Jobopportunity = {
  short_breaf: ReactNode;
  list: unknown;
  heading: string;
  content: string;
};

export type Scholarship = {
  short_breaf: ReactNode;
  scholarshiplist: unknown;
  heading: string;
  content: string;
};

export type ApplicationProcedure = {
  short_breaf: ReactNode;
  steps: string[];
};

export type AdmissionRequirment = {
  short_breaf: ReactNode;
  requirements: string[];
};

export type Visaprocedure = {
  list: unknown;
  steps: string[];
};

export type City = {
  logo: string;
  name: string;
  population: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Study_Country = {
  id: number;
  country: string;
  slug: string;
  flag?: File | null | FileList | string;
  photo?: File | null | FileList | string;
  route_slug: string;
  box1: Box1;
};

export type Whystudylist = {
  title: string;
  content: string;
};

export type List = {
  title: string;
  content: string;
};

export type List2 = {
  title: string;
  content: string;
};

export type Scholarshiplist = {
  name: string;
  criteria: string;
  coverage: string;
  deadline: string;
  process: string;
};

export type Applicationprocedureslist = {
  title: string;
  content: string;
};
export interface Fee {
  program: string;
  cost: string;
}

export interface LivingCost {
  item: string;
  cost: string;
}

export interface JobOpportunity {
  title: string;
  content: string;
}

export type List3 = {
  title: string;
  content: string;
};

export type List4 = {
  title: string;
  content: string;
};
