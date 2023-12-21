const router=require("express").Router()
const UserRoute=require('./userRoute')
router.use("/createUser",UserRoute)
router.use("/getUser",UserRoute)
router.use("/deleteUser",UserRoute)
module.exports=router
