require("./db/connection");

const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const userRouter = require("./user/userRoutes");

app.use(express.json());
app.use(cors());

app.use(userRouter);



app.listen(port,()=>{
    console.log("Listening on port 5000")
})  

