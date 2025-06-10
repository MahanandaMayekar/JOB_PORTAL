import { Body, Controller, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { BadRequestException } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    

    @Post("/register")
    async register(@Body(new ValidationPipe()) registerData: RegisterUserDto) {
   
        if (registerData.password !== registerData.confirmPassword) {
            throw new BadRequestException('Passwords do not match');
          }

        return await this.authService.register(registerData)
        
    }

    @Post("/login")
    async login(@Body(ValidationPipe) loginData: LoginUserDto) {
        return await this.authService.login(loginData)
        
    }

}
