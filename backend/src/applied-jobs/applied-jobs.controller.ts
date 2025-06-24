import { Controller, Query, UploadedFile } from '@nestjs/common';
import { AppliedJobsService } from './applied-jobs.service';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Post, Body ,Get} from '@nestjs/common';
import { AppliedJobsDto } from './dto/applied-job-dto';
import { BadRequestException } from '@nestjs/common';

@Controller('applied-jobs')
export class AppliedJobsController {

    constructor(private appliedJobsService: AppliedJobsService) { }
    

    @Post()
    @UseInterceptors(FileInterceptor("coverLetter", {
        storage: diskStorage({
            destination: "./uploads/applications",
            filename: (req, file, cb) => {
                const uniqueName = `${Date.now()}-${file.originalname}`;
                cb(null, uniqueName);
                
            }
        })
    }))
  
    async applyjob(@UploadedFile() file: Express.Multer.File, @Body() body: AppliedJobsDto) {
        if (!file) {
            throw new BadRequestException("Cover letter file is required");
          }
    console.log("file",file);
    
        const fileUrl = `http://localhost:3000/uploads/applications/${file.filename}`;
        const result = await this.appliedJobsService.CreateApplication({ ...body, coverLetterFile: fileUrl });
        console.log("files data",result);
        
        return result
    }


    @Get()
    async fetchEmployersApplications(@Query("employerId") employerId:string) {
        const result = await this.appliedJobsService.fetchEmployersApplications(employerId)
        return result
    }

}
