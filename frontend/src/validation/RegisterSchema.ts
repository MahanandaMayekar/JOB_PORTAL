import * as yup from 'yup';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const RegisterSchema = yup.object({
    id: yup.string().optional(),
    fullName: yup.string().required("Your full name is required"),
    email: yup
        .string()
        .required("Email is required")
        .matches(emailRegex, "Email should be in valid format"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords must match"),
    
});
