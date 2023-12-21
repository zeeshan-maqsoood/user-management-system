import React, { useState, useEffect } from "react";
import UserModal from "../components/AddUserModal";
import UserList from "../components/UserList";
import { GetUser } from "../Api/user";
import axios from "axios";
const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  let [userData,setUserData]=useState([])
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [isCreated,setIsCreated]=useState(false)
  const [deleted,setDeleted]=useState(false)
  console.log(isCreated,"isCreated")
  const createUser = () => {
    try {

    } catch (error) {}
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetUser();
        setUserData(data);
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Refetch user data when isCreated is set to true
        if (isCreated) {
          const data = await GetUser();
          setUserData(data);
          setIsCreated(false); // Reset isCreated to false after updating the user data
        }
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchData();
  
  }, [isCreated,]);

  return (
    <> 
      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-semibold text-gray-800">Users</h2>
              <div>
                <button
                  className="bg-blue-500 text-white p-2 rounded-md"
                  onClick={openModal}
                >
                  Add Users
                </button>
                <UserModal isOpen={isModalOpen} onClose={closeModal} setIsCreated={setIsCreated} setModalOpen={setModalOpen} closeModal={closeModal} setDeleted={setDeleted} setUserData={setUserData} />
              </div>
            </header>

            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Name</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Email</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Role</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Created Date</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Delete</div>
                      </th>
                    </tr>
                  </thead>
                  <UserList userData={userData} setIsCreated={setIsCreated} isCreated={isCreated} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
