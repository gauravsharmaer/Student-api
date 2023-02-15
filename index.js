const express = require('express')
const studentRoutes=require("./routes/studentroutes");
const mongoose=require("mongoose");
const app = express()
const bodyParser = require("body-parser");
const port = 8000
app.use(express.urlencoded());


// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.use("/api/student",studentRoutes)
const start=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/studentData")
    app.listen(port, () => console.log(`App listening on port ${port}!`))
    }
    start()


module.exports = app;   