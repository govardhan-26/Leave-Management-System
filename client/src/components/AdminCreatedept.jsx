import React from 'react';
import SidebarComponent from './SidebarComponent';
import AdminSidebar from './AdminSidebar';

const AdminCreatedept = () => {
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
            <h1><b>Dates :</b></h1>
            <div>
              <label>From &nbsp;</label>
              <input type='date' className='rounded-[5px]' />
            </div>
            <div>
              <label>To &nbsp;</label>
              <input type='date' className='rounded-[5px]' />
            </div>
          </div>
          <div className='flex text-center mt-[30px] justify-start pl-[131px]'>
            <h1><b>Reason : &nbsp;</b></h1>
            <textarea type='text' className='w-[100%] h-[20vh] rounded-[5px]'></textarea>
          </div>
          <div className='flex text-center mt-[30px] items-center justify-start pl-[131px]'>
            <h1><b>Type of Leave : &nbsp;</b></h1>
            <select id="dropdown" name="selectedOption" className='rounded-[5px] '>
              <option value="sick">Sick</option>
              <option value="vacation">Vacation</option>
              <option value="maternity">Maternity/Paternity</option>
            </select>
          </div>
          <div className='flex text-center mt-[30px] items-center justify-start pl-[131px]'>
            <h1><b>No. of Days : &nbsp;</b></h1>
            <input type="number" className='rounded-[5px]' />
          </div>
          <div className='flex text-center mt-[30px] items-center justify-end pl-[150px]'>
            <button type='submit' className='text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Submit Req</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreatedept;
