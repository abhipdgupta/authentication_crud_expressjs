//  1. user can post on /user/:user_id/post/
//  2. a user can specific post from /user/:user_id/post/:post_id
//  3. admin can view all users posts
//  4. other user cannot delete other user post only itself
//  5. login signup auhtentication and authorization using cookies
const express = require("express");
const app = express();
const path=require("path")
const connectDB=require('./connectDb/dbconnect')
const User = require('./model/userSchema');

// routes
const userRoutes=require('./routes/user')
const staticRoutes=require('./routes/staticRoutes')

const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"))


connectDB();

app.use('/user',userRoutes);
app.use('/',staticRoutes);



app.listen(port, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT: ${port}`);
});
