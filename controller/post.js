const Post = require("../model/postSchema");

const handleCreatePost = async (req, res) => {
  
  const post = await Post.create({
    title: req.body.title,
    post_msg: req.body.post_msg,
    createdBy: req.user._id,
  });

  return res.redirect("/user/profile");
};
const handleEditPost = async (req, res) => {
  
  await Post.findByIdAndUpdate(req.body.post_id,
    {
    title:req.body.title,
    post_msg:req.body.post_msg
  })

  return res.redirect("/user/profile")
};

const handleDeletePost = async (req, res,next) => {

  
  await Post.deleteOne({
    _id:req.query.id
  })

  next()
  
};
const getPostDetail=async(req,res,next)=>{



  const post = await Post.findOne({
    _id:req.query.id
  });

  req.post=post

  next()


}
const getUserPosts = async (req, res, next) => {
  const userID = req.user?._id;

  if (!userID) return res.redirect("/login");

  const posts = await Post.find({
    createdBy: req.user._id,
  });

  req.posts = posts;

  next();
};

const getAllPosts= async(req,res,next)=>{

  const allPosts=await Post.find();
  

  req.allposts=allPosts;

  next();

}
module.exports = {
  handleCreatePost,
  handleDeletePost,
  getUserPosts,
  getPostDetail,
  handleEditPost,
  getAllPosts,
};
