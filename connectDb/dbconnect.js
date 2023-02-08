const db = require("mongoose");

db.set("strictQuery", false);

const connectDB = async () => {
  return db.connect("mongodb://127.0.0.1:27017/wazirdb");
};

module.exports=connectDB;