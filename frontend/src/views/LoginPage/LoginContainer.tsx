import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSchema } from "../../validation/LoginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Login from "./Login";
import type { LoginType } from "../../types/login/LoginTypes";
import { useLazyGetUserByEmailQuery } from "../../store/register/registerService";
import { useLoginMutation } from "../../store/login/LoginService";
import { useLoginEmployerMutation } from "../../store/login/LoginService";
import { useState } from "react";
import { useLazyGetEmployerByEmailQuery } from "../../store/employer/employerService";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"employer" | "candidate" | undefined>();
  const [triggerGetUser] = useLazyGetUserByEmailQuery();
  const [login, { isLoading }] = useLoginMutation();
  const [loginEmployer] = useLoginEmployerMutation();
  const [getEmployerByEmail] = useLazyGetEmployerByEmailQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (formData: LoginType) => {
    try {
      if (!role) {
        toast.error("Please select whether you are candidate or employer");
        return;
      }
      let response;
      if (role === "candidate") {
         response = await login(formData).unwrap();
       
        const user = await triggerGetUser(response?.userEmail).unwrap();

        console.log("form submitted", user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", response.token);
        if (user?.isFirstLogin) {
          navigate("/firstLogin");
        } else {
          navigate("/dashboard");
          toast.success("Login successful!");
        }
        
      } else if (role==="employer") {
        response = await loginEmployer(formData).unwrap()
        const user = await getEmployerByEmail(response?.userEmail).unwrap();
        console.log("form submitted", user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", response.token);
        navigate("/panel");
      }
      console.log("login response", response);
     
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || "Something went wrong! Unable to login";
      console.log("Login error:", errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Login
        handleFormSubmit={handleSubmit(handleFormSubmit)}
        register={register}
        errors={errors}
        isloading={isLoading}
        role={role}
        setRole={setRole}
      />
    </>
  );
};

export default LoginContainer;
