import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UserType } from "../../types/user/UserType";

export const registerApi = createApi({
  reducerPath: "RegisterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    createUser: builder.mutation<UserType, UserType>({
      query: (registerObject) => ({
        url: "users",
        method: "POST",
        body: registerObject,
      }),
      invalidatesTags: ["User"],
    }),
    getUserByEmail: builder.query<UserType | undefined, string>({
      query: (email) => `users?email=${email}`,
      providesTags: ["User"],
    }),
    updateUser: builder.mutation<UserType, { id: string; updateData: Partial<UserType> }>({
      query: ({ id, updateData }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: ["User"],
    }),
    getUserById: builder.query<UserType, string>({
      query: (id) => `users/${id}`,
      providesTags: ["User"],
    }),
    deleteUser: builder.mutation<UserType,string>({
      query: (id:string) => ({
        url: `delete/${id}`,
        method: "DELETE",
      })
    })
  }),
});

export const { useCreateUserMutation, useGetUserByEmailQuery, useUpdateUserMutation, useLazyGetUserByEmailQuery,useGetUserByIdQuery,useLazyGetUserByIdQuery,useDeleteUserMutation } = registerApi;
