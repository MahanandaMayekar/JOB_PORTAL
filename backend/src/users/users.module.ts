import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { UserSchema } from './schema/user.schema';
@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
