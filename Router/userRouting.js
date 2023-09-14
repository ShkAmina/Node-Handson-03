const route=require("express").Router();
const {register,login,logout}=require("../Controller/userController")
const specificMD=require("../Middleware/userMiddleware")
route.get("/api/app",specificMD,register)
route.get("/api/entry",specificMD,login)
route.get("/api/exit",logout)
module.exports=route