
import { IsEmail, IsString, IsNotEmpty, IsArray, IsMongoId, IsOptional } from "class-validator";
import { Type } from 'class-transformer';

export class CreateEmployerDto {
    @IsEmail({}, { message: "Email must be in valid format" })
    @IsNotEmpty({ message: "Email should not be empty" })
    email: string;

    @IsString({ message: " companyName should be a string" })
    @IsNotEmpty({ message: " companyName should not be empty" })
    companyName: string;

    @IsString({ message: "password should be a string" })
    @IsNotEmpty({ message: "password should not be empty" })
    password: string;

    @IsArray()
    @IsOptional()
    @Type(() => String)
    @IsMongoId({ each: true })
    jobPosts?: string[];


    @IsString({ message: "role should be a string" })
    @IsNotEmpty({ message: "role should not be empty" })
    role: string;
}