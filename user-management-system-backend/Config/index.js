const dotenv=require('dotenv')
dotenv.config()
module.exports={
    db:{
        PROD:process.env.MONGO_PROD,
        DEV:process.env.MONGO_DEV
    }
}