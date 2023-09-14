const express=require("express")
const route=require("./Router/userRouting")
const productRoute=require("./Router/productRouting")
const apps=express();
const port=5001
const specificMD=require("./Middleware/userMiddleware")
const middleware=(req,res,next)=>{
    console.log("Application level middleware")
    next();
}
apps.use(middleware)
apps.use("/user",specificMD,route)
apps.use("/product",productRoute)
apps.listen(port,()=>{
    try{
        console.log(`Server is on port no.${port}`)
    }
    catch(err){
        console.log(`On starting of server we got ${err}`)

    }
})