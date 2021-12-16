const bcrypt = require("bcrypt");

const User = require("../user/userModel");

exports.hashPassword = async(req, res, next) =>{
    try{

        const userPassword =  await req.body.password;
        req.body.password = await bcrypt.hash(req.body.password, 8);
        await bcrypt.compare(userPassword, req.body.password, (req,res) =>{
            if (res ==true){
                console.log("logged in")
            }else{
                console.log("Wrong password")
            }
        });            
        next(); 
    }catch(err){
        console.log(error)
        res.status(500).send({message: "Unsecessful. please try again"})
    }
};

exports.checkEmail = async (req, res, next) => {
    try {
      const emailRegex = /.+\@.+\..+/;
      const validateEmail = emailRegex.test(req.body.email);
      if (validateEmail) {
        next();
      } else {
        res.status(400).send({ message: "Email invalid" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Unsuccessfull" });
    }
    }
  