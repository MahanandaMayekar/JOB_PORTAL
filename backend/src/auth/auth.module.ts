import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { EmployerModule } from 'src/employer/employer.module';
@Module({
  imports: [UsersModule,EmployerModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
