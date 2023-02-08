const User = require('../model/userSchema');

const handleUserSignup=async (req,res)=>{

    console.log(req.body)
    const result =await User.create({
        username:req.body.username,
        email: req.body.email,
        password: req.body.password,
    })    

    res.send(result)
}


module.exports={
    handleUserSignup,
}