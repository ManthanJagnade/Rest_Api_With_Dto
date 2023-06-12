import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    //this code initializes the mongoDB connection using Mongoose with the provided url and mongodb is working and store the data 
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/DtoData'),
    UsersModule,
  ],
})
export class AppModule {}
