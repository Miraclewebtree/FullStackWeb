const express = require("express");
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;

const Employee = require("../models/employee");

//Get, Post, Put, Delete
//http://localhost:3000/employees


//Get API
router.get('/', (req, res) => {
    Employee.find((err, doc) => {
        if (err) {
            console.log("Error in get data" + err)
        } else {
            res.send(doc);
        }
    })
})

//Get single Employee API
router.get('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        Employee.findById(req.params.id, (err, doc) => {
            if (err) {
                console.log("Error in get employee by id" + err)
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send('No record found with id' + req.params.id)
    }

})

//Post API
router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        department: req.body.department
    });

    emp.save((err, doc) => {
        if (err) {
            console.log("Error in post data" + err)
        } else {
            res.send(doc);
        }
    })
})


//Put API
router.put('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {

        let emp = {
            name: req.body.name,
            position: req.body.position,
            department: req.body.department
        }

        Employee.findByIdAndUpdate(req.params.id, {$set:emp}, {new:true}, (err, doc) => {
            if (err) {
                console.log("Error in update employee by id" + err)
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send('No record found with id' + req.params.id)
    }

})


//Delete API
router.delete('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                console.log("Error in delete employee by id" + err)
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send('No record found with id' + req.params.id)
    }

})

module.exports = router;