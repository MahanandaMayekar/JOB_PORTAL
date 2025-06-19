import { useState } from "react";
import Register from "./Register";
import type { RegisterType } from "../../types/register/registerType";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../validation/RegisterSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation } from "../../store/login/LoginService";
import { useRegisterEmployerMutation } from "../../store/login/LoginService";
const RegisterContainer = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"employer" | "candidate" | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(RegisterSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [registerUser] = useRegisterUserMutation();
  const [RegisterEmployer] = useRegisterEmployerMutation();
 
  const handleFormSubmit = async (data: RegisterType) => {
    try {
      if (!role) {
        toast.error("Please select whether you are candidate or employer");
        return;
      }
   
      let response;
      if (role === "candidate") {
        response = await registerUser({ ...data, role }).unwrap();
      } else if (role === "employer") {
        response = await RegisterEmployer({ ...data, role }).unwrap();
      }
      console.log(response);

      toast.success("You have been registered successfully!");
      navigate("/login");
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || "Something went wrong! Unable to register";
      console.log("Registration error:", errorMessage);
      toast.error(errorMessage);
    }
  };
  return (
    <Register
      setRole={setRole}
      role={role}
      handleFormSubmit={handleSubmit(handleFormSubmit)}
      register={register}
      errors={errors}
    />
  );
};

export default RegisterContainer;
