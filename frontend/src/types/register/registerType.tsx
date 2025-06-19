import type { UseFormRegister, FieldErrors } from "react-hook-form";

export type RegisterType = {
  id?: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  
};

export type RegisterProps = {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  handleFormSubmit:  () => void;
  register: UseFormRegister<RegisterType>;
  errors: FieldErrors<RegisterType>;
};


export const registerInitialState: RegisterType = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
 
};
