import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSchema } from "../../validation/LoginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Login from "./Login";
import type { LoginType } from "../../types/login/LoginTypes";
import { useLazyGetUserByEmailQuery } from "../../store/register/registerService";
import { useLoginMutation } from "../../store/login/LoginService";

const LoginContainer = () => {
  const navigate = useNavigate();

  const [triggerGetUser] = useLazyGetUserByEmailQuery();
  const [login] = useLoginMutation();

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
      const response = await login(formData).unwrap();
      console.log("login response", response);
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
    } catch (error:any) {
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
      />
    </>
  );
};

export default LoginContainer;
