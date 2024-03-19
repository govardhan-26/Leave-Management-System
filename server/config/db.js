
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
    //   console.log("DATABASE_URL:", DATABASE_URL);
    //   console.log("DB_OPTIONS:", DB_OPTIONS);
  
      await mongoose.connect('mongodb+srv://gowa:gowa@cluster0.ga43ixn.mongodb.net/');
  
      // console.log(DB_OPTIONS.dbName + ' Database Connected Successfully...');
    } catch (error) {
      console.error(error);
      // consolex.log(DB_OPTIONS.dbName + ' Database Connection Failure...');
    }
  };

  module.exports = connectDB;
  