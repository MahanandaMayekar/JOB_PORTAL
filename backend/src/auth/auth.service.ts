import { BadRequestException, Body, Injectable, ValidationPipe } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { }
    
    async register( registerData: RegisterUserDto) {
        const isPasswordCorrect = registerData.password === registerData.confirmPassword
        if (!isPasswordCorrect) {
            throw new BadRequestException('Passwords do not match');
        }
        
        const user = await this.userService.createUser(registerData)
        return user
        
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


}
