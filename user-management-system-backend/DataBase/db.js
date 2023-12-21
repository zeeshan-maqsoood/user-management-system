const mongoose = require('mongoose');
const config=require("../Config/index")
console.log(config,"config")
const connectDB = async () => {
  try {
        await mongoose.connect(config.db.PROD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.log(`mongoose Error ${error}`);
    }
};

module.exports = connectDB;
