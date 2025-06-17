import { BadRequestException, Body, Injectable, ValidationPipe } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EmployerService } from 'src/employer/employer.service';
@Injectable()
export class AuthService {
    constructor(private userService: UsersService,private employerService:EmployerService) { }
    
    async register( registerData: RegisterUserDto) {
        const isPasswordCorrect = registerData.password === registerData.confirmPassword
        if (!isPasswordCorrect) {
            throw new BadRequestException('Passwords do not match');
        }
        
        const user = await this.userService.createUser(registerData)
        return user
        
    }

    async registerEmployer(registerData: RegisterUserDto) {
        const isPasswordCorrect = registerData.password === registerData.confirmPassword
        if (!isPasswordCorrect) {
            throw new BadRequestException('Passwords do not match');
        }

        const Employer = await this.employerService.CreateEmployer(registerData)
        return Employer

    }

    async login(loginData:LoginUserDto) {
        const user = await this.userService.findByEmail(loginData?.email)
        if (!user) {
            throw new NotFoundException("user not found");
        }
        const isPasswordCorrect = await bcrypt.compare(loginData.password, user.password)
        if (!isPasswordCorrect) {
            throw new BadRequestException('Passwords is incorrect');
        }
        const fakeToken = `fake-token-${Math.floor(
            Math.random() * 100000
        )}-${Date.now()}`;

        return {
            userId: user?._id,
            userEmail:user?.email,
            token:fakeToken
        }
    }

    async loginEmployer(loginData: LoginUserDto) {
        const employer = await this.employerService.findEmployerByEmail(loginData.email)
        if (!employer) {
            throw new NotFoundException("employer not found");
        }
        const isPasswordCorrect = await bcrypt.compare(loginData.password, employer.password)
        if (!isPasswordCorrect) {
            throw new BadRequestException('Passwords is incorrect');
        }
        const fakeToken = `fake-token-${Math.floor(
            Math.random() * 100000
        )}-${Date.now()}`;

        return {
            userId: employer?._id,
            userEmail: employer?.email,
            token: fakeToken
        }
    }


}
