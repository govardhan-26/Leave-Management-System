import React, { useEffect, useState } from 'react';
import SidebarComponent from '../SidebarComponent';
import AdminSidebar from './AdminSidebar';

const Leavelist = () => {
  const [LeaveTypes, setLeaveTypes] = useState([
    
  ]);

  useEffect(() => {
    async function GetLeavelist(){
      try {
        const response = await fetch('http://localhost:8080/api/v1/LeaveType/LeaveTypeList', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Failed to submit request');
        }
        const data = await response.json(); // Parse response body as JSON
      
        setLeaveTypes(data); // Update departments state with the fetched data
        console.log(data);
      } catch (error) {
        console.error('Error submitting request:', error);
      }
    }
    GetLeavelist();
    
  },[])
  

  return (
    <div className='flex'>
      <AdminSidebar />

      <div className='w-full p-20 rounded-[5px] bg-gray-100 m-[3%]'>
        <h2 className='text-center mb-4'>Leave List</h2>
        <table className='border-collapse w-full'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border py-2 px-4'>Sl. No.</th>
              <th className='border py-2 px-4'>Leave Type</th>
              <th className='border py-2 px-4'>Details</th>
              <th className='border py-2 px-4'>Status</th>
            </tr>
          </thead>
          <tbody>
            {LeaveTypes.map((item, index) => (
              <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} key={index}>
                <td className='border py-2 px-4'>{index + 1}</td>
                <td className='border py-2 px-4'>{item.LeaveTypeName}</td>
                <td className='border py-2 px-4'>{item.LeaveTypeDetails}</td>
                <td className='border py-2 px-4'>{item.LeaveTypeStatus ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className='flex text-center mt-[30px] items-center justify-end'>
          <button
            type='submit'
            className='text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Apply Leave
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Leavelist;
