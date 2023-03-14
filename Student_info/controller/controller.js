const conn = require("../connection/connection");
const axios = require("axios");


const data = (req, res) => {

    const sql = "select * from students"
    conn.query(sql, (err, result) => {
        return res.status(200).json({
            detail: result
        })
    })
}

const getData = async (req, res) => {

    const record = await axios.get("http://localhost:3000/data");
    res.status(200).json({
        data: record.data
    })
}

const addData = async(req,res) => {

    const {name, email, phone } = req.body
    const data ={
        name: name,
        email: email,
        phone: phone
    }


    const record = await axios.post("http://localhost:3000/single-data", data);
    res.status(200).json({
        data: record.data
    })
}

const addSingleData = async (req , res ) => {
    
    const {name, email, phone } = req.body
    const sql = "insert into students (name , email, phone) values (?,?,?)"
    conn.query(sql,[name,email,phone],(err,result)=>{
        return  res.status(201).json({
            data:result
          })
      })
}


module.exports = {
    data,
    getData,
    addData,
    addSingleData
}