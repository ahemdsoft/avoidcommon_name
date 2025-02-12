import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/Employee.js";


mongoose.connect('mongodb://localhost:27017/company');


const app = express()
const port = 3000
app.set("view engine", "ejs");
app.get("/",(req,res)=>{
  res.render("index",{data:"Data"} );
})
let i=1;
app.get('/genarate', async (req, res) => {
  let employees = [];
  let names = ["anas", "ali", "ahmed", "mohamed", "khaled", "mohamed", "ahmed", "ali", "anas", "khaled"];
  let descs = ["bangladesh", "pakistan", "egypt", "syria", "palestine", "iraq", "yemen", "sudan", "morocco", "tunisia"];
  let isDoneOptions = [true, false];

  let nameIndex = Math.floor(Math.random() * names.length);
  let descIndex = Math.floor(Math.random() * descs.length);
  let isDoneIndex = Math.floor(Math.random() * isDoneOptions.length);

  // Check if an employee with the same name exists
  const oldemployee = await Employee.findOne({ name: names[nameIndex],desc:descs[descIndex],isDone:isDoneOptions[isDoneIndex] });

  if (oldemployee) {
    console.log("Already exists:", oldemployee);
    return res.json({ message: "Employee already exists", employee: oldemployee });
  } else {
    const employee = await Employee.create({
      ide: i,
      name: names[nameIndex],
      desc: descs[descIndex],
      isDone: isDoneOptions[isDoneIndex]
    });
    i++;
    console.log(employee);
    employees.push(employee);
    return res.json(employees);
  }
});


app.get('/delete',async (req, res) => {
  for (let i=1;i<11;i++){
  const employee=await Employee.deleteMany({name:"anas"})


  console.log("deleted ")}
  
  
  res.send("deleted");

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})