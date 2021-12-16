const {Router} =require("express");
const {addUser, listUsers, updateUser, deleteUser} = require("./userController");
const { hashPassword, checkEmail} = require("../middleware")
const userRouter = Router();

userRouter.post("/user",checkEmail, hashPassword, addUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", hashPassword, updateUser);
userRouter.delete("/user", deleteUser);



module.exports = userRouter