import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { JobType } from "../../types/jobs/jobTypes";
import type { CreateJobType } from "../../types/jobs/CreateJobType";
export const jobApi = createApi({
  reducerPath: "JobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes:["Jobs"],
  endpoints: (builder) => ({
    // Fetch all jobs
    fetchJobs: builder.query<JobType[], void>({
      query: () => "jobs",
      providesTags: ["Jobs"],
     
    }),

    fetchJobsByCategory: builder.query<JobType[], string>({
      query: (category) => `jobs?category=${category}`,
      providesTags: ["Jobs"],
    }),

    fetchJobById: builder.query<JobType, string>({
      query: (id) => `jobs/${id}`,
      providesTags: ["Jobs"],
    }),

    applyJob: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/applied-jobs",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Jobs"],
    }),
    CreateJob: builder.mutation<JobType, CreateJobType>({
      query: (data) => ({
        url: "/jobs",
        method: "POST",
        body: data,
      }),
    }),
    fetchEmployersPosts: builder.query<JobType[],string>({
      query: (Id) => `/jobs/employer-jobs?employerId=${Id}`,
      providesTags: ["Jobs"],
    }),
    fetchEmployersApplications: builder.query<any, string>({
      query: (Id) => `/applied-jobs?employerId=${Id}`,
      providesTags: ["Jobs"],
      
    })
  }),
  
});

// Hooks
export const {
  useFetchJobsQuery,
  useFetchJobsByCategoryQuery,
  useFetchJobByIdQuery,
  useApplyJobMutation, 
  useCreateJobMutation,
  useFetchEmployersPostsQuery,
  useFetchEmployersApplicationsQuery
} = jobApi;
