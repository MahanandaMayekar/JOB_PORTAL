import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppliedJobs } from './schema/applied-job.schema';
import { Model } from 'mongoose';
import { AppliedJobDocument } from './schema/applied-job.schema';
import { AppliedJobsDto } from './dto/applied-job-dto';
@Injectable()
export class AppliedJobsService {
    constructor(@InjectModel(AppliedJobs.name) private appliedJobsModel: Model<AppliedJobDocument>) { }
    
    async CreateApplication(applicationData: AppliedJobsDto) {
        const result = await this.appliedJobsModel.create(applicationData)
        return result
        
    }

}
