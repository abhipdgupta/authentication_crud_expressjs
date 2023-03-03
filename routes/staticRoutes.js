const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controller/user");
const {
  handleCreatePost,
  handleDeletePost,
  getUserPosts,
  getAllPosts,
} = require("../controller/post");
const { loginRestriction, authCheck } = require("../middleware/auth");

const router = express.Router();

router.get("/", authCheck,getAllPosts, (req, res) => {
  if (!req.user) return res.redirect("/login");
  return res.render("home", { userDetails: req.user,allPosts:req.allposts });
});

router
  .route("/signup")
  .get((req, res) => {
    return res.render("signup", { tryingToSignup: false });
  })
  .post(handleUserSignup);

router
  .route("/login")
  .get((req, res) => {
    return res.render("login");
  })
  .post(handleUserLogin);

router.route("/logout").get((req, res) => {
  res.clearCookie("sessionID");
  return res.redirect("/login");
});


module.exports = router;
