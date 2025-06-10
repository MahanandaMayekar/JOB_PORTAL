import { useEffect, useState } from "react";
import Register from "./Register";
import type { RegisterType } from "../../types/register/registerType";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../validation/RegisterSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation } from "../../store/login/LoginService";
const RegisterContainer = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(RegisterSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      isFirstLogin: true,
      interestedCategories: [],
    },
  });
  useEffect(() => {
    setValue("role", role);
  }, [role, setValue]);

  const [registerUser] = useRegisterUserMutation();

  const handleFormSubmit = async (data: RegisterType) => {
    try {
      if (!data.role) {
        toast.error("Please select whether you are candidate or employer");
        return; // stop form submit here
      }
      const response = await registerUser(data).unwrap();
      console.log("response", response);

      toast.success("User registered successfully!");
      navigate("/login");
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || "Something went wrong! Unable to login";
      console.log("Login error:", errorMessage);
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
