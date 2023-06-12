import { Controller, Get, Post, Put, Delete, Body, Param, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, User } from './user.dto';


//this code defines a controller class named UsersController that handles user related operations and injects an instance of the UsersService class through its constructor

@Controller('users')
export class UsersController {
constructor(private readonly usersService: UsersService) {}


// this is my get method this method defines findAll in the UsersController class, which retrieves all users by calling the findAll method of the usersService instanc
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }


  //this is my one more get method this get method call a particular data findById in the UsersController class which retrieves a user by their id using the id parameter from the request body and calling the findById method of the usersService instance i am also using body because @param is not working 

  @Get(':id')
  async findById(@Body('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }


  // this my post method  create in the UsersController class which creates a new user by accepting a userDto object from the request body applying validation using a ValidationPipe and calling the create method of the usersService and i use CreateUserDto i also use promise it represents the return type of the asynchronous operation
  @Post()
  async create(@Body(ValidationPipe) userDto: CreateUserDto): Promise<User> {
    return this.usersService.create(userDto);
  }

//this code defines an update method in the UsersController class which receives a user ID and an updated user object calls the update method of the usersService instance with these parameters and returns a Promise that resolves to a User object
  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, userDto);
  }

  //this is my delete method which deletes a user by calling the delete method of the usersService instance with the provided user ID

  @Delete(':id')
  async delete(@Body('id') id: string): Promise<User> {
    return this.usersService.delete(id);
  }
}
