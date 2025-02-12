import mongoose from 'mongoose';


const EmployeeSchema = new mongoose.Schema({
  ide:Number,
  name: String,
  desc: String,
  isDone:Boolean
  
  });
 export const Employee = mongoose.model('Employee', EmployeeSchema);