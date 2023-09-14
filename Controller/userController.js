const register=(req,res)=>{
    res.send("This is register page")
    }
    const login=(req,res)=>{
        res.send("Login")
    }
    const logout=(req,res)=>{
        res.send("LogOut")
    
    }
    module.exports={register,login,logout}