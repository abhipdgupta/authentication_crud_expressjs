const express = require("express");

const {
  handleCreatePost,
  handleDeletePost,
  getUserPosts,
   getPostDetail,
  handleEditPost
} = require("../controller/post");


const router = express.Router();

router
  .route("/createpost")
  .get((req, res) => {
    res.render("createPost");
  })
  .post(handleCreatePost);


router.route("/edit")
.get(getPostDetail,(req,res)=>{
  return res.render("editPost",{post:req.post})
})
.post(handleEditPost)

router
  .route("/profile")
  .get(getUserPosts, (req, res) => {
    res.render("profile", { userDetails: req.user, userPosts: req.posts });
  });

router
  .route("/profile/post/")
  .delete(handleDeletePost,(req,res)=>{
    return res.status(200).json({msg:"Successfully Deleted"})
  })
  
  


module.exports = router;
