import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { EmployerType } from "../../types/employerType/EmployerType";

export const employerApi = createApi({
    reducerPath: "employerApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes:["Employer"],
    endpoints: (builder) => ({
        getEmployerByEmail: builder.query<EmployerType | undefined, string>({
              query: (email) => `employer?email=${email}`,
              providesTags: ["Employer"],
            }),
    })
})

export const {useGetEmployerByEmailQuery ,useLazyGetEmployerByEmailQuery}=employerApi