require("dotenv").config();
let express=require("express");
const { connection } = require("./configs/db");
let cors=require("cors")

let bcrypt=require("bcrypt");
let jwt=require("jsonwebtoken");


let app=express();
app.use(express.json());
app.use(cors());





app.get("/",(req,res)=>{
    res.send({msg:"home"})
})

app.post("/signup",async(req,res)=>{
    res.send({msg:"signup"})
   
})

app.post("/login",async(req,res)=>{
    res.send({msg:"login"})
   
})













app.listen(process.env.PORT,()=>{
    connection()
    console.log("listening at port 8080")
})