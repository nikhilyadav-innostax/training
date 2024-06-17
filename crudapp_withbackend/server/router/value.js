const express = require('express');
const value = require('../data.json')
const router = express.Router();
const fs = require('fs')

// api = http://localhost:8080/data/getdata
router.get('/getdata' , (req, res) => {
    // console.log("Its in value.js")
    try {
        res.json({message: "You get the data", success: true, data: value})
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})

// api = http://localhost:8080/data/adddata
router.post('/adddata' , async(req, res) => {
    try {
        const data = req.body;
        const findData = value.find((item) => data.id === item.id)
        // console.log(data, "This is DAta");
        if(!findData){
            value.push(data);
            // console.log(value, "This is value")
            fs.writeFileSync("data.json", JSON.stringify(value));
            res.json({success: true, message: "Data Updated Succesfully"})
        }else{
            res.json({success: false, message: "Id is already present"})
        }     
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})

// api = http://localhost:8080/data/updatedata/:id
router.post('/updatedata/:id' , async(req, res) => {
    const id = req.params.id;
    try {
        const data = req.body.employeeData;
        value.forEach((item) => {
            if(item.id === id){
                item.name = data.name;
                item.email = data.email;
                item.update = data.update;
            }
        })
        // console.log(value)
        fs.writeFileSync("data.json", JSON.stringify(value));
        res.json({success: true, message: "Data Updated Succesfully"})

    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})

// api = http://localhost:8080/data/deletedata/:id
router.delete('/deletedata/:id' , async(req, res) => {
    const id = req.params.id;
    // console.log("delete router")
    try {
        const employeeData = value.filter((item) => item.id !== id)
        // console.log(employeeData)
        fs.writeFileSync("data.json", JSON.stringify(employeeData));
        res.json({success: true, message: "Employee Data Deleted Succesfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})

module.exports = router