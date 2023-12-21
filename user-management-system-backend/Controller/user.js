const User = require('../Model/user');
const createUser = async (req, res) => {
  console.log(req.body,"body")
  const {name,email,role}=req.body
  try {
const existUser=await User.findOne({email:email})
console.log(existUser,"existUser")
if (existUser!==null) {
  res.json({
    success:false,
    message:"this email is already exists",
    data:"",
    status:404
  })
  
}else{
  console.log("no")
 const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({
      success:true,
      message:"New User Created",
      data:savedUser,
      status:201
    });
}
   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users,"users")
    console.log(users.length)
    if (users.length===0) {
      console.log("0 Users")
      res.status(404).json({
        success:false,
        message:"No User Found",
        data:"",
        status:404
      })
    }
    else{
      console.log("many Users")
      res.status(200).json({
        success:true,
        message:"All Users",
        data:users,
        status:200
      });
    }
   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser=async(req,res)=>{
  const {id}=req.params
  try {
    const user=await User.findByIdAndDelete(id)
    if (!user) {
      res.status(400).json({
        success:false,
        message:"Something Went Wrong",
        data:user,
        status:400
      })
    }
    else{
      res.status(200).json({
        success:true,
        message:"User has been Deleted",
        data:"",
        status:20
      })
    }
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

module.exports = {
  createUser,
  getAllUsers,
  deleteUser
};
