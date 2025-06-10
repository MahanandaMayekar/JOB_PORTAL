import * as yup from 'yup';
const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const LoginSchema = yup.object({
    email: yup.string().required("Email is required").matches(emailRegex, 'Email must be a valid format'),
    password:yup.string().required("password is required").min(6,"Password must be at least 6 characters")
})