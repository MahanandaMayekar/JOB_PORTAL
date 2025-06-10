import {
    IsString,
    IsNumber,
    IsNotEmpty,
    IsArray,
    IsBoolean,
    IsDateString,
    IsIn,
    Min,

} from "class-validator";


export class CreateJobDto {
    @IsString()
    @IsNotEmpty({ message: "Title is required" })
    title: string;

    @IsString()
    @IsNotEmpty({ message: "Description is required" })
    description: string;

    @IsString()
    @IsNotEmpty({ message: "Company name is required" })
    company: string;

    @IsString()
    @IsNotEmpty({ message: "Location is required" })
    location: string;

    @IsNumber({}, { message: "Salary from must be a number" }) // Added object for message consistency
    @IsNotEmpty({ message: "Salary range (from) is required" })
    @Min(0, { message: "Salary from cannot be negative" }) // Ensure salary is non-negative
    salary_from: number;

    @IsNumber({}, { message: "Salary to must be a number" }) // Added object for message consistency
    @IsNotEmpty({ message: "Salary range (to) is required" })
    @Min(0, { message: "Salary to cannot be negative" }) // Ensure salary is non-negative
    salary_to: number;



    @IsString()
    @IsNotEmpty({ message: "Employment type is required" })

    @IsIn(['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'], { message: "Invalid employment type" })
    employment_type: string;


    @IsDateString({}, { message: "Application deadline must be a valid date string (e.g., YYYY-MM-DD)" })
    @IsNotEmpty({ message: "Application deadline is required" })
    application_deadline: string;

    // Corrected: @IsArray() syntax and added validation for each item
    @IsArray({ message: "Qualifications must be an array" })
    @IsString({ each: true, message: "Each qualification must be a string" })
    @IsNotEmpty({ each: true, message: "Qualifications cannot contain empty strings" })
    qualifications: string[];

    @IsString()
    @IsNotEmpty({ message: "Contact is required" })
    contact: string;

    @IsString()
    @IsNotEmpty({ message: "Job Category is required" })
    job_category: string;

    @IsNumber({}, { message: " is_remote_work must be a number" })
    is_remote_work:number;

    @IsNumber({}, { message: "Number of openings must be a number" })
    @Min(1, { message: "Number of openings cannot be zero or  negative" })
    number_of_opening: number;

    @IsString()
    @IsNotEmpty({ message: "Category is required" })
    category: string;
}
