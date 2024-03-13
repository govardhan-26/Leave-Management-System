import React, { useState } from 'react';
import SidebarComponent from '../SidebarComponent';
import AdminSidebar from './AdminSidebar';

const Admindeptlist = () => {
  const [departments, setDepartments] = useState([
    { name: 'Computer Science', isActive: true },
    { name: 'Mechanical Engineering', isActive: true },
    { name: 'Cyber Security', isActive: false },
    { name: 'Aerospace Engineering', isActive: true },
    
  ]);

  const [newDepartment, setNewDepartment] = useState({
    name: '',
    isActive: true,
  });

  const handleInputChange = (e) => {
    setNewDepartment({
      ...newDepartment,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setNewDepartment({
      ...newDepartment,
      isActive: !newDepartment.isActive,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic if needed

    // Add the new department to the list
    setDepartments([...departments, newDepartment]);

    // Clear the form after submission
    setNewDepartment({
      name: '',
      isActive: true,
    });
  };

  return (
    <div className='flex'>
      <AdminSidebar />

      <div className='w-full p-20 rounded-[5px] bg-gray-100 m-[3%]'>
        <h2 className='text-center mb-4'>Department List</h2>
        <table className='border-collapse w-full'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border py-2 px-4'>Sl. No.</th>
              <th className='border py-2 px-4'>Department Name</th>
              <th className='border py-2 px-4'>Status</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, index) => (
              <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} key={index}>
                <td className='border py-2 px-4'>{index + 1}</td>
                <td className='border py-2 px-4'>{dept.name}</td>
                <td className='border py-2 px-4'>{dept.isActive ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='flex text-center mt-[30px] items-center justify-end'>
          <button
            type='submit'
            onClick={handleSubmit}
            className='text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Create Department
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admindeptlist;
