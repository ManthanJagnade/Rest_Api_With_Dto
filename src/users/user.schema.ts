import * as mongoose from 'mongoose';


//this is my schema for postman and mongodb i created a function and write a under the function my schema is their 
export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
