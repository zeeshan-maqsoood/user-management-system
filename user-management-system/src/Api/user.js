
// postApi.js
import axios from "axios"
const BASE_URL = 'http://localhost:5000/api';
export const GetUser = async () => {
  try {
    const response=await axios.get("http://localhost:5000/api/getUser")
    console.log(response)
    return await response.data
  } catch (error) {
    return error
  }

};

export const CreateUser = async (postData) => {
  const {name,email,role}=postData
  
const response=await axios.post(`${BASE_URL}/createUser`,{
  headers:{
    "Contenty-Type":"application/json"
  },
  name:name,
  email:email,
  role:role
})
return response.data
 
};


export const DeleteUser=async(id)=>{
  try {
    const response=await axios.delete(`http://localhost:5000/api/deleteUser/${id}`)
    console.log(response,"response")
    return response.data
  } catch (error) {
    return error.message
  }
}
