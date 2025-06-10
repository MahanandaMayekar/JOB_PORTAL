import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-uset.dto';
import { BadRequestException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
    
    
    async findByEmail(email: string) {
        const result = await this.userModel.findOne({email})
        if (!result) {
            throw new NotFoundException("User with this Email does not exist")
        }
        return result
    }

    async createUser(userData: CreateUserDto) {
        const ifUserExist = await this.userModel.findOne({ email: userData.email })
        if (ifUserExist) {
            throw new BadRequestException('User with this email already exists');
        }
        const hashedPassword = await bcrypt.hash(userData.password,10)

        const newUser = await this.userModel.create({
            ...userData,
            password: hashedPassword,
        });

        console.log("user",newUser);
        
        return newUser
        
    }


    async updateUser(id: string, updateData: UpdateUserDto) {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateData, { new: true })
        if (!updatedUser) {
            throw new NotFoundException('User not found for update');
          }
        return updatedUser
        
    }
    async findById(UserId: string) {
        const result = await this.userModel.findById(UserId)
        if (!result) {
            throw new NotFoundException("User with Id not found")
        }
        return result
    }
}
