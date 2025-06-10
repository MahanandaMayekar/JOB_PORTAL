import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class LoginUserDto {
    @IsString()
    @IsEmail({}, { message: "Email is required" })
    @IsNotEmpty({ message: "Email is required" })
    email: string;


    @IsString()
    @IsNotEmpty({ message: "Password is required" })
    password: string
}