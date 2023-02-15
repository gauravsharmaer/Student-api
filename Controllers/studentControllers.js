const { Error, default: mongoose } = require("mongoose");
const studentModel=require("../models/Schema");

const getstudentdatas=async(req,res,next)=>{
try{
    const students=await studentModel.find({})
    res.status(200).json(students)
}
catch(error){
 next(error)
}
}

const getstudentdata=async(req,res,next)=>{
    try{
        const {id}=req.params
        const students=await studentModel.findById(id)
        if(!students){
            throw Error("no such Data")
        }
        res.status(200).json(students)
    }
    catch(error){
     next(error)
    }
    }
    

    const deletestudentdata=async(req,res,next)=>{
        try{
            const {id}=req.params
            const students=await studentModel.findOneAndDelete({_id:id})
            if(!students){
                throw Error("no such Data")
            }
            res.status(200).json(students)
        }
        catch(error){
         next(error)
        }
        }
        
        const updatestudentdata=async(req,res,next)=>{
            try{
                const {id}=req.params
                const students=await studentModel.findOneAndUpdate({_id:id},{...req.body})
                if(!mongoose.Types.ObjectId.isValid(id)){
                    throw Error("no such Data")
                }
                if(!students){
                    throw Error("no such Data")
                }
                res.status(200).json(students)
            }
            catch(error){
             next(error)
            }
            }
            
            
            const createstudentdata=async(req,res,next)=>{
                try{
                    const {id,name,currentClass,division}=req.body
                    const students=await studentModel.create({id,name,currentClass,division})
              
                    res.status(201).json(students)
                }
                catch(error){
                 next(error)
                }
                }
 module.exports={createstudentdata,updatestudentdata,deletestudentdata,getstudentdata,getstudentdatas}             
                


