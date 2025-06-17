import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JobsModule } from './jobs/jobs.module';
import { AppliedJobsModule } from './applied-jobs/applied-jobs.module';
import { EmployerModule } from './employer/employer.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://mahananda_01:mahananda_01@cluster0.0wglpsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), AuthModule, JobsModule, AppliedJobsModule, EmployerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
