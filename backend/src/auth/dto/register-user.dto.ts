import { IsString, IsNotEmpty, IsEmail, IsEnum,IsDefined } from "class-validator";
import { userRole } from "src/users/enums/user-role.enum";

export class RegisterUserDto {
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

    @IsString()
    @IsDefined({ message: 'Confirm password must be provided' })
    @IsNotEmpty({ message: "Confirm password is required" })
    confirmPassword: string;

    @IsEnum(userRole)
    role: userRole;

}