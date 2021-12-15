const User = require("./userModel");

exports.addUser = async(req, res)=>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({message: "Successfully added user", newUser})
    }catch(err){
        console.log(err);
        res.status(500).send({message: "Unseccessful, please try again"})
    }
};
//esperando encontrar 
exports.updateUser = async (req, res) =>{
    try{
       await User.findByIdAndUpdate(req.body._id, req.body)
        updateUser = await User.findById(req.body._id);
        res.status(200).send({message:"Successfully updated user", updateUser})
    }catch(err){
        console.log(err) 
    }
}

exports.listUsers = async(req, res) =>{
    try{   
        user = await User.find({});
        res.status(200).send({message:"List os users: ", user}) 
    }catch(err){
        console.log(err)
    }
}

exports.deleteUser = async(req,res) =>{
    try{
       user = await User.findByIdAndDelete(req.body)
       res.status(200).send({message:"User deleted successfully: ", user})
    }catch(err){
        console.log(err)
    }
}