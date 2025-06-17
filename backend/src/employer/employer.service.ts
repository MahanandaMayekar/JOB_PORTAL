import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employer } from './schema/employer.schema';
import { Model } from 'mongoose';
import { EmployerDocument } from './schema/employer.schema';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class EmployerService {
    constructor(@InjectModel(Employer.name) private employerModel: Model<EmployerDocument>) { }
    
    async CreateEmployer(body: CreateEmployerDto) {
        const employerExist =await  this.employerModel.findOne({ email: body.email })
        if (employerExist) {
             throw new BadRequestException('User with this email already exists');
        }
         const hassedPassword=await bcrypt.hash(body.password,10)
        const newEmployer = await this.employerModel.create({
            ...body,
            password:hassedPassword
        })
        console.log("new empoyer", newEmployer);
        return newEmployer
        

    }
    async findEmployerByEmail(email:string) {
        const employer = await this.employerModel.findOne({ email })
        if (!employer) {
            throw new BadRequestException('employer with this email not found');
        }

        return employer
    }


}
