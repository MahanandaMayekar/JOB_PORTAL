import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { JobType } from "../../types/jobs/jobTypes";
export const jobApi = createApi({
  reducerPath: "JobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    // Fetch all jobs
    fetchJobs: builder.query<JobType[], void>({
      query: () => "jobs",
    }),

    fetchJobsByCategory: builder.query<JobType[], string>({
      query: (category) => `jobs?category=${category}`,
    }),

    fetchJobById: builder.query<JobType, string>({
      query: (id) => `jobs/${id}`,
    }),

    applyJob: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/applied-jobs",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

// Hooks
export const {
  useFetchJobsQuery,
  useFetchJobsByCategoryQuery,
  useFetchJobByIdQuery,
  useApplyJobMutation, 
} = jobApi;
