import React, { useState } from 'react';
import SidebarComponent from '../SidebarComponent';
import AdminSidebar from './AdminSidebar';

const AdminLeavetype = () => {
  const [leaveType, setLeaveType] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
  };

  const handleLeaveTypeChange = (event) => {
    setLeaveType(event.target.value);
  };

  const submitRequest = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='w-[100%] p-20 rounded-[5px] bg-gray-100 m-[3%]'>
        <form onSubmit={submitRequest}>
          <div className='flex text-center items-center justify-evenly'>
            <div className='flex text-center mt-[30px] items-center justify-start pl-[131px]'>
              <h1><b>Leave Type : &nbsp;</b></h1>
              <select
                value={leaveType}
                onChange={handleLeaveTypeChange}
                className='rounded-[5px]'>
                <option value=''>Select Leave Type</option>
                <option value='sick'>Sick Leave</option>
                <option value='vacation'>Vacation</option>
                <option value='maternity_paternity'>Maternity/Paternity</option>
                <option value='casual_leave'>Causal Leave</option>
              </select>
            </div>
          </div>
          <div className='flex text-center mt-[30px] justify-start pl-[130px]'>
            <h1><b>Leave Details: &nbsp;</b></h1>
            <textarea type='text' className='w-[80%] h-[20vh] rounded-[5px]'></textarea>
          </div>
          <div className='flex text-center mt-[15px] justify-start pl-[131px]'>
            <label className='mr-[10px]'>
              <input type='checkbox' checked={isActive} onChange={handleCheckboxChange} />
              Leave Status
            </label>
          </div>
          <div className='flex text-center mt-[30px] items-center justify-end pl-[150px]'>
            <button type='submit' className='text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Apply Leave</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLeavetype;
