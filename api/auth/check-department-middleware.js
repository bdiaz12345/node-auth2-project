module.exports = (department) => (req,res,next) =>{
    if(req.decodedToken.department === department){
        next()
    }else{
        res.status(403).json("You are not an admin, YOU SHALL NOT PASS!!!!")
    }
}