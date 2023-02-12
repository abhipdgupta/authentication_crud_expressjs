//  1. user can post on /user/:user_id/post/
//  2. a user can specific post from /user/:user_id/post/:post_id
//  3. admin can view all users posts
//  4. other user cannot delete other user post only itself
//  5. login signup auhtentication and authorization using cookies
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
const connectDB = require("./connectDb/dbconnect");
// const User = require("./model/userSchema");
// const { loginRestriction } = require("./middleware/auth");

// routes
const {loginRestriction}=require('./middleware/auth')
const staticRoutes = require("./routes/staticRoutes");
const userRoutes= require("./routes/userRoutes")


const port = 3000;

// view
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser())
// connection
connectDB();

//routes use

app.use("/", staticRoutes);
app.use("/user",loginRestriction, userRoutes);

app.listen(port, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT: http://localhost:${port}`);
});
