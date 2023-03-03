const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
const connectDB = require("./connectDb/dbconnect");

// routes
const {loginRestriction}=require('./middleware/auth')
const staticRoutes = require("./routes/staticRoutes");
const userRoutes= require("./routes/userRoutes")

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

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT: http://localhost:${port}`);
});
