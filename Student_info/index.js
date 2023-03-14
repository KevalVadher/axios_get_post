const express = require("express");
const conn = require("./connection/connection");
const router = require("./router/router")
const bodyParser = require("body-parser")

const app = express();

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use("/",router)




app.listen(3000,(err)=>{
  if (err) console.log("ERROR")

  console.log("Hello")
})