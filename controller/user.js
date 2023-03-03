const { setUser } = require("../userInfo");
const User = require("../model/userSchema");

const handleUserSignup = async (req, res) => {
  
  const userExist=await User.find({ email: req.body.email})
  
  if(userExist.length===0){
   
  
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
     
    });
 
    return res.redirect("/login")
  }
  else{
    return res.render("signup",{signupSuccess:false,tryingToSignup:true})
  }

  
};
const handleUserLogin = async (req, res) => {

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if(!user){
    return res.render("login",{authenticated:false})
  }

  const token= setUser(user)
  res.cookie("sessionID",token,{maxAge:900*1000,httpOnly: true })

  return res.redirect("/")
};

module.exports = {
  handleUserSignup, 
  handleUserLogin,
  
};
