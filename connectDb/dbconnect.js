const db = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

db.set("strictQuery", false);
const mongoUrl = process.env.DB_URL;
const connectDB = async () => {
  db.connect(mongoUrl, {
    useNewUrlParser: true,
  })
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch((err) => {
      console.log(`err: ${err}`);
    });
};

module.exports = connectDB;
