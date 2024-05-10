
// const mongoose = require("mongoose");
// const connectDB = async (DATABASE_URL, DB_OPTIONS) => {
//     try {
//     //   console.log("DATABASE_URL:", DATABASE_URL);
//     //   console.log("DB_OPTIONS:", DB_OPTIONS);
  
//       await mongoose.connect(DATABASE_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         ...DB_OPTIONS,
//       });
  
//       console.log(DB_OPTIONS.dbName + ' Database Connected Successfully...');
//     } catch (error) {
//       console.error(error);
//       console.log(DB_OPTIONS.dbName + ' Database Connection Failure...');
//     }
//   };

//   module.exports = connectDB;
  


const mongoose = require("mongoose");
const connectDB = async () => {
    try {
    //   console.log("DATABASE_URL:", DATABASE_URL);
    //   console.log("DB_OPTIONS:", DB_OPTIONS);
  
      await mongoose.connect('mongodb+srv://bgrnaidu:singa@clusterlms1.khgilio.mongodb.net/');
  
      // console.log(DB_OPTIONS.dbName + ' Database Connected Successfully...');
    } catch (error) {
      console.error(error);
      // consolex.log(DB_OPTIONS.dbName + ' Database Connection Failure...');
    }
  };

  module.exports = connectDB;