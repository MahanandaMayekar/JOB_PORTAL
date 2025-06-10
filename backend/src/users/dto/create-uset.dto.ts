import { IsString, IsNotEmpty, IsEmail, IsBoolean, IsEnum, IsOptional, IsArray } from "class-validator";
import { Experience } from "../schema/experience.schema";
import { userRole } from "../enums/user-role.enum";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "Email is required" })
    email: string;


    @IsString()
    @IsNotEmpty({ message: "Password is required" })
    password: string;


    @IsEnum(userRole)
    role: userRole;

    @IsBoolean()
    @IsOptional()
    isFirstLogin?: boolean;

    @IsArray()
    @IsOptional()
    interestedCategories?: string[];

    @IsArray()
    @IsOptional()
    savedPosts?: any[];

    @IsArray()
    @IsOptional()
    appliedPosts?: any[];

    @IsString()
    @IsOptional()
    DOB?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    code?: string;

    @IsString()
    @IsOptional()
    contact?: string;

    @IsString()
    @IsOptional()
    occupation?: string;

    @IsString()
    @IsOptional()
    introduction?: string;

    @IsArray()
    @IsOptional()
    skills?: string[];


    @IsArray()
    @IsOptional()
    experience?: Experience[]

}