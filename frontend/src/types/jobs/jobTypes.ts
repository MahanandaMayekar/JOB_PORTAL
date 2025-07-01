export type JobType = {
    _id?: string;
    title: string;
    description: string;
    company: string;
    location: string;
    salary_from: number;
    salary_to: number;
    employment_type: string;
    application_deadline: string;
    qualifications: string[]; // or string[] if parsed
    contact: string;
    job_category: string;
    is_remote_work: boolean; // consider using boolean
    number_of_opening: number;
    employerId: string;
    createdAt?: string;

    updatedAt?: string;
    category: string;
};


export type JobCardProps = {
    job: JobType;
    status?:string
}


export type ApplyJobType = {
    jobId?: string;
    userId?: string;
    email: string;
    address: string;
    contact: string;
    coverLetterFile?: File;
}