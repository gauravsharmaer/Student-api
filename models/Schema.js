const mongoose=require("mongoose");
const studentSchema=new  mongoose.Schema({
    id:{
        required:true,
        type:Number
    },
    name:{
        required:true,
        type:String
    },
    currentClass:{
        required:true,
        type:Number
    },
    division:{
        required:true,
        type:String
    }
})
module.exports=mongoose.model("studentData",studentSchema)