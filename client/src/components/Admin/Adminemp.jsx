import React, { useState } from 'react';
import SidebarComponent from '../SidebarComponent';
import AdminSidebar from './AdminSidebar';

const Adminemp = () => {
  const [isActive, setIsActive] = useState(true);
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    phoneNumber: '',
    address: '',
    roles: '',
    email: '',
    password: '',
    image: '',
  });

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  const submitRequest = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://localhost:8080/api/v1/Employee/EmployeeCreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeDetails),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit request');
      }
  
      // Assuming the API returns some data, you can handle it here
      // const data = await response.json();
      // console.log('Request submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };
  

  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='w-[80%] p-10 rounded-[20px] bg-gray-100 m-[3%]'>
        <form onSubmit={submitRequest}>
          <div className='flex text-left items-center justify-between'>
            <div className='flex mt-[30px] items-center justify-start w-[45%]'>
              <h1 className='mr-[10px]'><b>First Name:</b></h1>
              <input
                type='text'
                name='firstName'
                value={employeeDetails.firstName}
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'
              />
            </div>
            <div className='flex mt-[30px] items-center justify-start w-[45%]'>
              <h1 className='mr-[10px]'><b>Last Name:</b></h1>
              <input
                type='text'
                name='lastName'
                value={employeeDetails.lastName}
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'
              />
            </div>
          </div>

          <div className='flex text-left items-center justify-between'>
            <div className='flex mt-[75px] items-center justify-start w-[20%]'>
              <h1 className='mr-[20px]'><b>DOB:</b></h1>
              <input
                type='date'
                name='dob'
                value={employeeDetails.dob}
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'
              />
            </div>
            <div className='flex mt-[75px] items-center justify-start w-[25%]'>
              <h1 className='mr-[20px]'><b>Gender:</b></h1>
              <select
                name='gender'
                value={employeeDetails.gender}
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'>
                <option value=''>Select Gender</option>
                <option value='M'>Male</option>
                <option value='F'>Female</option>
              </select>
            </div>
          

          <div className='flex text-left items-left justify-between'>
            <div className='flex mt-[75px] items-center justify-start w-[80%]'>
              <h1 className='mr-[-2px]'><b>Phone Number:</b></h1>
              <input
                type='text'
                name='phoneNumber'
                value={employeeDetails.phoneNumber}
                onChange={handleInputChange}
                className='rounded-[5px] w-[100%]'
              />
            </div>
          </div>
        </div>

          <div className='flex text-left items-center justify-between'>
            <div className='flex mt-[75px] items-center justify-start w-[60%]'>
              <h1 className='mr-[20px]'><b>Address:</b></h1>
              <input
                type='text'
                name='address'
                value={employeeDetails.address}
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'
              />
            </div>
            <div className='flex mt-[75px] items-center justify-start w-[20%]'>
              <h1 className='mr-[20px]'><b>Roles:</b></h1>
              <select
                name='roles'
                value={employeeDetails.roles}
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'>
                <option value=''>Select Role</option>
                <option value='A'>Role A</option>
                <option value='B'>Role B</option>
                <option value='C'>Role C</option>
                <option value='D'>Role D</option>
              </select>
            </div>
          </div>

          <div className='flex text-left items-center justify-between'>
            <div className='flex mt-[75px] items-center justify-start w-[45%]'>
              <h1 className='mr-[20px]'><b>Email:</b></h1>
              <input
                type='email'
                name='email'
                value={employeeDetails.email}
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'
              />
            </div>
            <div className='flex mt-[75px] items-center justify-start w-[45%]'>
              <h1 className='mr-[20px]'><b>Password:</b></h1>
              <input
                type='password'
                name='password'
                value={employeeDetails.password}
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'
              />
            </div>
          </div>

          <div className='flex text-left items-center justify-between'>
            <div className='flex mt-[75px] items-center justify-start w-[80%]'>
              <h1 className='mr-[20px]'><b>Image (max 200KB):</b></h1>
              <input
                type='file'
                name='image'
                accept='image/*'
                onChange={handleInputChange}
                className='rounded-[5px] w-[80%]'
              />
            </div>
          </div>

          <div className='flex mt-[30px] items-center justify-end'>
            <button type='submit' className='text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminemp;
