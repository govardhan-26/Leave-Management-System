import React, { useState } from 'react';
import SidebarComponent from './SidebarComponent';
import AdminSidebar from './AdminSidebar';

const AdminCreatedept = () => {
  const [isActive, setIsActive] = useState(true);

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
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

          
            <div className='flex text-center items-center justify-evenly'>
              <h1 className='flex text-center mt-[30px] items-center justify-start pl-[131px]'><b>Department Name : &nbsp;</b><input type="text" className='rounded-[5px]' /></h1>
              <h1 className='flex text-center mt-[30px] items-center justify-start pl-[131px]'><b>Department Code : &nbsp;</b><input type="text" className='rounded-[5px]' /></h1>
            </div>

          </div>
          <div className='flex text-center mt-[30px] justify-start pl-[131px]'>
            <h1><b>Department Details : &nbsp;</b></h1>
            <textarea type='text' className='w-[100%] h-[20vh] rounded-[5px]'></textarea>
          </div>

          <div className='flex text-center mt-[15px] justify-start pl-[131px]'>
            <label className='mr-[10px]'>
              <input type='checkbox' checked={isActive} onChange={handleCheckboxChange} />
              Department Status
            </label>
          </div>

          
          
        
          
          <div className='flex text-center mt-[30px] items-center justify-end pl-[150px]'>
            <button type='submit' className='text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Add Department</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreatedept;
