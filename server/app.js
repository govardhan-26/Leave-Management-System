const express = require('express');
const server = express();


const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const connectDB = require("./config/db");

dotenv.config({ path: path.join(__dirname, "../.env") });// for loading environment  variables  from .env file.


const PORT = process.env.PORT || 8080;
const Department = require('./models/Department');
// const Schema = mongoose.Schema;
// const Model = mongoose.model;
server.use(express.json()); 
// mongoose.connect('mongodb://localhost:27017/demo',{ useNewUrlParser: true})


//Connect to MongoDB
connectDB(process.env.MONGODB_CONNECTION_URL,{
  user: process.env.MONGODB_DATABASE_USERNAME,
  pass: process.env.MONGODB_DATABASE_PASSWORD,
  dbName: process.env.MONGODB_DATABASE_NAME,
  autoIndex: true,
  w: 'majority',
});

// const departmentSchema = new Schema({name:String,capacity:String});

// const department = Model("department",departmentSchema);


// const createdepartment = async () => {
//     await department.create({ name: "xyz", capacity: "500 litres"}); 
// };

// createdepartment();

// server.get("/departments",async (req,res)=>{
//     try{
//         let dept = await Department.find({});
//         res.json(dept);
//     }catch(error){
//         console.log(error);
//         res.status(500).json({ error: "internal error occured"});
//     }
// })


// server.get("/departments",async (req,res)=>{
//     try{
//         let dept = await Department.find({}).count().exec();
//         res.json(dept);
//     }catch(error){
//         console.log(error);
//         res.status(500).json({ error: "internal error occured"});
//     }
// })

server.get("/departments",async (req,res)=>{
    try{
        let dept = await Department.find({}).sort("-DepartmentShortName").limit(1).exec();
        res.json(dept);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "internal error occured"});
    }
})

server.get("/departments",async (req,res)=>{
    try{
        let dept = await Department.find({});
        res.json(dept);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "internal error occured"});
    }
})

server.get("/departments",async (req,res)=>{
    try{
        let dept = await Department.find({}).sort("-DepartmentShortName").limit(1).exec();
        res.json(dept);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "internal error occured"});
    }
})

server.get('/departments/:id', async (req, res) => {
    try {
        const departments = await Department.findOne({_id:req.params.id}).exec();
        res.json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

server.post('/departments',(req,res)=> {
          try {
            let department = new Department();
            department.DepartmentName = req.body.DepartmentName;
            department.DepartmentShortName = req.body.DepartmentShortName;
            department.DepartmentDetails = req.body.DepartmentDetails;
            department.DepartmentStatus = req.body.DepartmentStatus;
            department.save();
            res.json(department);
            console.log(req.body);
        } catch (error) {
            console.error(error);
            res.status(404).json({ error: "error"});
        }
})

server.delete("/departments",async (req,res)=>{
   try{
       const department= await Department.deleteOne({DepartmentShortName: "CST"});
       res.json(department);
   } catch(error)
   {
     console.log(error);
     res.status(500).json({error: "error occured"});
   }
})

server.put("/departments",async (req,res)=>{
    try{
          const x = req.body.DepartmentShortName;
          const department= await Department.updateOne({DepartmentShortName : x},{$set: { DepartmentShortName : "CST"} });
        if(department.modifiedCount==0)
        {
            res.status(404).json({error : "department is not found"});
        }
        else{
            res.json({message : "department updated successfully"});
        }
    } catch(error)
    {
        console.log(error);
        res.status(500).json({error: "error occured"});
    }
})

server.put("/departments/:id", async (req,res)=>{
    try{
         const dept = await Department.findOneAndUpdate({_id:req.params.id},{$set:{DepartmentShortName:req.body.DepartmentShortName}},{new:true});
         res.json(dept);
    }catch(error)
    {
          console.log(error);
          res.status(500).json({error: "error occured"});
    }
})

server.delete("/departments/:id",async (req,res)=>{
    try{
         const dept = await Department.findByIdAndDelete({_id:req.params.id},{new:true});
         res.json(dept);
    }catch(error)
    {
        console.log(error);
        res.status(500).json({error: "error occured"});
    }
})


server.listen(PORT,() => 
    console.log(`example app is listening on port ${PORT}`)
);
