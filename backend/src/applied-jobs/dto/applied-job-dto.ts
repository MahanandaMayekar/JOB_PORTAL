import { IsString,IsNotEmpty,IsEmail } from "class-validator";


export class AppliedJobsDto{
    @IsString({message:"JobId must be a string"})
    @IsNotEmpty({message:"JobId should not be empty"})
    jobId: string;

    @IsString({ message: "UserId must be a string" })
    @IsNotEmpty({ message: "userId should not be empty" })
    userId: string;
    
    @IsString({ message: 'EmployerId must be a string' })
    @IsNotEmpty({ message: 'EmployerId should not be empty' })
    employerId: string;

    @IsString({ message: "Email must be a string" })
    @IsNotEmpty({ message: "Email should not be empty" })
        @IsEmail({},{message:"Email must be in valid format"})
    email: string;

    @IsString({ message: "Address must be a string" })
    @IsNotEmpty({ message: "Address should not be empty" })
    address: string;

    @IsString({ message: " contact must be a string" })
    @IsNotEmpty({ message: " contact should not be empty" })
    contact: string;

    @IsString({ message: " CV must be a string" })
    @IsNotEmpty({ message: " please upload your cv" })

    coverLetterFile: string;
}