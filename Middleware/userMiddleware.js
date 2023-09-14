const specificMD=(req,res,next)=>{
    console.log("Spcific Middleware")
    next();
}
module.exports=specificMD