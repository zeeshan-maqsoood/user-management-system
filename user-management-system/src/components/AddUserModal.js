import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CreateUser } from '../Api/user';
const UserModal = ({ isOpen, onClose,setIsCreated,setModalOpen,closeModal }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      role: Yup.string().required('Role is required'),
    }),
    onSubmit: async(values) => {
      console.log(values,"values")
      const data=await CreateUser(values)
      if(data.status===201){
        setIsCreated(true)
        setModalOpen(false)
        closeModal()
        formik.resetForm()
      }
      alert(data.message)
    },
  
  });

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center px-3">
        <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        <div className="bg-white p-8 rounded-lg z-10" style={{ padding: '20px' }}>
          {/* Adjusted padding */}
          <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`mt-1 p-2 w-full border rounded-md ${
                  formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`mt-1 p-2 w-full border rounded-md ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-600">
                Role
              </label>
              <select
                id="role"
                name="role"
                className={`mt-1 p-2 w-full border rounded-md ${
                  formik.touched.role && formik.errors.role ? 'border-red-500' : ''
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.role}
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              {formik.touched.role && formik.errors.role && (
                <div className="text-red-500">{formik.errors.role}</div>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default UserModal;
