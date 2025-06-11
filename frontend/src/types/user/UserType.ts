import type { JobType } from "../jobs/jobTypes";
type Experience = {
  company: string,
  roleAtCompany: string,
  location: string,
  startDate: string,
  endDate: string,
  description:string
}
export type UserType = {
    _id?:string,
  fullName: string;
  email: string;
  password: string;
  role: string;
  isFirstLogin: boolean;
  interestedCategories: string[];
  savedPosts?: JobType[];
  appliedPosts?: JobType[];
  DOB?: string,
  address?: string,
  country?: string,
  code?: string,
  contact?:string,
  occupation?: string,
  introduction?: string,
  skills?: string[],
  experience?:Experience[]
    
};
