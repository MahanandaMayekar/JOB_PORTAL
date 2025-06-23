import * as Yup from 'yup';

export const createJobSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    company: Yup.string().required("Company name is required"),
    location: Yup.string().required("Location is required"),

    salary_from: Yup.number()
        .typeError("Salary from must be a number")
        .required("Salary range (from) is required")
        .min(0, "Salary from cannot be negative"),

    salary_to: Yup.number()
        .typeError("Salary to must be a number")
        .required("Salary range (to) is required")
        .min(0, "Salary to cannot be negative"),

    employment_type: Yup.string()
        .required("Employment type is required"),
        

    employerId: Yup.string()
        .required("Employer ID is required"),

    application_deadline: Yup.string()
        .required("Application deadline is required")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Application deadline must be a valid date string (e.g., YYYY-MM-DD)"),

    qualifications: Yup.array()
        .transform((value, originalValue) => {
            if (typeof originalValue === "string") {
                return originalValue
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean);
            }
            return value;
        })
        .required("Qualifications are required")
        .min(1, "At least one qualification is required"),

    contact: Yup.string().required("Contact is required"),
    job_category: Yup.string().required("Job Category is required"),

    is_remote_work: Yup.number()
        .required("is_remote_work is required"),

    number_of_opening: Yup.number()
        .required("Number of openings is required")
        .min(1, "Number of openings cannot be zero or negative"),

    category: Yup.string().required("Category is required"),
});
