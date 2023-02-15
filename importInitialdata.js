const mongoose=require("mongoose");
const studentModel=require("./models/Schema");
const data=require("./InitialData")
const start=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/studentData")
    await studentModel.deleteMany()
    studentModel.create(data)
    }
    start()
    
    