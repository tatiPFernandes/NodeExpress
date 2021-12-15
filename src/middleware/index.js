const bcrypt = require("bcrypt");

const User = require("../user/userModel");

exports.hashPassword = async(req, res, next) =>{
    try{

        const userPassword =  await req.body.password;
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();

       req.body.password = await bcrypt.compare(userPassword, req.body.password);
        next();
        res.status(200).send({message: "Logged in"})
        if(res == true){
            console.log("You are logged in")
        }else{
            console.log("Login failed")
        }
    }catch(err){
        console.log(BaseError)
        res.status(500).send({message: "Unsecessful. please try again"})
    }
};

