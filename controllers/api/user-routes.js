const express = require('express');
const router = express.Router();
const {User,Role} = require("../../models")
const sequelize = require('../../config/connection')
const bcrypt = require("bcrypt")

router.get("/",(req,res)=>{
    User.findAll({
        include:[Role]
    })
    .then(userData=>{
        res.json(userData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router