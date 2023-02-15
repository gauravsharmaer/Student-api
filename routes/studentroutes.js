const express=require("express")
const router=express.Router()
const {createstudentdata,updatestudentdata,deletestudentdata,getstudentdata,getstudentdatas} = require("../Controllers/studentControllers")

router.get("/",getstudentdatas)

router.get("/:id",getstudentdata)

router.post("/",createstudentdata)

router.delete("/:id",deletestudentdata)

router.put("/:id",updatestudentdata)

module.exports=router