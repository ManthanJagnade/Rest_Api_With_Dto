import { IsNotEmpty } from 'class-validator';

export class User {
id: string;

@IsNotEmpty()
username: string;

@IsNotEmpty()
password: string;
}

// we define two dto
//these dtos will be used for validate user input when create or update

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
