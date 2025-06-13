import { Body, Controller, Param, Post,Get,Query, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-uset.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    
    @Post()
    async create(@Body(ValidationPipe) userData: CreateUserDto) {
        return await this.userService.createUser(userData)
        
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body(ValidationPipe) updateData: UpdateUserDto
    ) {
        const user = await this.userService.updateUser(id, updateData);
        return user
    }

    @Get()
    async getUserByEmail(@Query('email') email: string) {
        const user = await this.userService.findByEmail(email)
        return user
        
    }
    @Get(":id")
    async getUserById(@Param("id") id: string) {
        return this.userService.findById(id)
        
    }
    @Delete(":id")

    async deleteUser(@Param("id") id: string) {
        
        return this.userService.deleteUser(id)
        
    }
}
