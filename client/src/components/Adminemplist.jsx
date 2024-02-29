import React, { useState } from 'react';
import SidebarComponent from './SidebarComponent';
import AdminSidebar from './AdminSidebar';

const Adminemplist = () => {
  const [employees, setEmployees] = useState([
    { name: 'Singa', Gender: 'Male', phoneNumber: '1234567890', email: 'singa.tiger@example.com' },
    { name: 'Shravya', Gender: 'Female', phoneNumber: '9876543210', email: 'shravya@example.com' },
    { name: 'Govardhan', Gender: 'Male', phoneNumber: '9876543210', email: 'gova@example.com' },
    { name: 'Goutham', Gender: 'Male', phoneNumber: '9876543210', email: 'rathod@example.com' },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    Gender: 'Male',
    phoneNumber: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic if needed

    // Add the new employee to the list
    setEmployees([...employees, newEmployee]);

    // Clear the form after submission
    setNewEmployee({
      name: '',
      Gender: 'Male',
      phoneNumber: '',
      email: '',
    });
  };

  const handleModify = (index) => {
    // Handle modification of the employee
    console.log(`Modify employee at index ${index}`);
  };

  const handleDelete = (index) => {
    // Handle deletion of the employee
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div className='flex'>
      <AdminSidebar />

      <div className='w-full p-20 rounded-[5px] bg-gray-100 m-[3%]'>
        <h2 className='text-center mb-4'>Employee List</h2>
        <table className='border-collapse w-full'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border py-2 px-4'>Sl. No.</th>
              <th className='border py-2 px-4'>Employee Name</th>
              <th className='border py-2 px-4'>Gender </th>
              <th className='border py-2 px-4'>Phone Number</th>
              <th className='border py-2 px-4'>Email</th>
              <th className='border py-2 px-4'>Actions</th> {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} key={index}>
                <td className='border py-2 px-4'>{index + 1}</td>
                <td className='border py-2 px-4'>{employee.name}</td>
                <td className='border py-2 px-4'>{employee.Gender}</td>
                <td className='border py-2 px-4'>{employee.phoneNumber}</td>
                <td className='border py-2 px-4'>{employee.email}</td>
                <td className='border py-2 px-4'>
                  <button
                    onClick={() => handleModify(index)}
                    className='bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg'
                  >
                    Modify
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className='bg-red-500 text-white px-4 py-2 rounded-lg'
                  >
                    Delete
                  </button>
                </td>
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
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminemplist;
