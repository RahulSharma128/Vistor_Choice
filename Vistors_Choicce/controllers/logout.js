const logout=(req,res)=>{
    res.clearCookie("UserRegistered");
    res.redirect("/");
}
module.exports=logout;