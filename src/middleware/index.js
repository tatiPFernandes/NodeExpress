const bcrypt = require("bcrypt");
const { BaseError } = require("sequelize/dist");
const User = require("../user/userModel");

exports.hashPassword = async(req, res, next) =>{
    try{
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    }catch(err){
        console.log(BaseError)
        res.status(500).send({message: "Unsecessful. please try again"})
    }
};