import React, { useEffect, useState } from 'react';
import { DeleteUser,  } from '../Api/user';

const UserList = ({ userData, setIsCreated, isCreated, setDeleted ,setUserData}) => {
  var userDatas = userData.data;
  const [deleteUser, setDeleteUser] = useState(false);
  const [users,setUsers]=useState([])
  const handleDeleteUser = async (e, id, index) => {
    console.log(id, 'id');
    try {    
      const response = await DeleteUser(id);
      const data=userDatas.filter((data)=>data._id!==id)
      console.log(data,"data")
      setUsers(data)
      setDeleteUser(true)

    // const allData= await GetUser()
    // setUsers(allData.data)
        // Remove the deleted user from userDatas
        // Update the state with the new array
       
        
    } catch (error) {
      console.error(error);
    }
  };
console.log(userData,"userData")
console.log(users,'users')

  return (
    <>
 {!deleteUser?<>
    {userDatas?.length > 0 ? (
        <>
          {userDatas.map((data,index) => {
            {
              console.log(data, 'data2');
            }
            return (
              <>
                <tbody class="text-sm divide-y divide-gray-100">
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="font-medium text-gray-800">{data.name}</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">{data.email}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">{data.role}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-center font-medium text-green-500">{data.createdAt}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <button
                        className="bg-blue-500 text-white p-2 rounded-md"
                        onClick={(e) => handleDeleteUser(e, data._id,index )}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </>
      ) : (
        'Not Found'
      )}
 
 
 </>:<>
 {users?.length > 0 ? (
        <>
          {users.map((data,index) => {
            {
              console.log(data, 'data2');
            }
            return (
              <>
                <tbody class="text-sm divide-y divide-gray-100">
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="font-medium text-gray-800">{data.name}</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">{data.email}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">{data.role}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-center font-medium text-green-500">{data.createdAt}</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <button
                        className="bg-blue-500 text-white p-2 rounded-md"
                        onClick={(e) => handleDeleteUser(e, data._id,index )}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </>
      ) : (
        'Not Found'
      )}
 
 
 
 </>}
     
    </>
  );
};

export default UserList;