import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto, User } from './user.dto';


//Injectable indicating that it can be injected with dependencies
@Injectable()
export class UsersService {
  //this is injectmodel 
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}


  //this is my find all method and exec it returns a promise that resolves to an array of User objects.
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }


// the findOne method with a filter condition matching the provided id The query is executed using exec and the method returns a Promise that resolves to a single User object matching the id
  findById(id: string): Promise<User> {
    return this.userModel.findOne({ id }).exec();
  }
 
// this is my create method and it,s use for post api it creates a new instance of the userModel using the userDto and then saves the new user to the database using newUser.save
  create(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }

  // update method in the UsersService class updates a user by their id with the provided userDto object it uses the findOneAndUpdate method of the userModel to perform the update operation and the new true option ensures that the updated user is returned the method returns promise that resolves to the updated user object
  async update(id: string, userDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findOneAndUpdate({ id }, userDto, {
      new: true,
    }).exec();
    return updatedUser;
  }

  //delete method in the UsersService class deletes a user by their id it uses the findOneAndDelete method of the userModel to perform the deletion operation

  async delete(id: string): Promise<User> {
    const deletedUser = await this.userModel.findOneAndDelete({ id }).exec();
    return deletedUser;
  }
}
