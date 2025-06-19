import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginResponseType } from '../../types/login/LoginTypes';
import type { LoginType } from '../../types/login/LoginTypes';
import type { UserType } from '../../types/user/UserType';
import type { RegisterType } from '../../types/register/registerType';
import type { EmployerType } from '../../types/employerType/EmployerType';
export const LoginApi = createApi({
    reducerPath: "LoginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/auth/",
        
    }),
    endpoints: (builder) => ({
        login: builder.mutation< LoginResponseType,LoginType>({
            query: (loginData) => ({
                url: "login",
                method: "POST",
                body: loginData,
                headers: {
                    'Content-Type': 'application/json',
                  },
               
            })
        }),
        loginEmployer: builder.mutation<LoginResponseType, LoginType>({
            query: (loginData) => ({
                url: "login/employer",
                method: "POST",
                body: loginData,
                headers: {
                    'Content-Type': 'application/json',
                },

            })
        }),
        RegisterUser: builder.mutation<UserType, RegisterType>({
            query: (registerData) => ({
                url: "register",
                method: "POST",
                body: registerData,
                
            })
            
        }),
        RegisterEmployer: builder.mutation<EmployerType, RegisterType>({
            query: (registerData) => ({
                url: "register/employer",
                method: "POST",
                body: registerData,
            })
        })
          
      })
    })
    export const { useLoginMutation ,useRegisterUserMutation,useRegisterEmployerMutation,useLoginEmployerMutation} = LoginApi