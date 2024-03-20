import React, { useEffect, useState } from 'react';
import SidebarComponent from '../SidebarComponent';
import AdminSidebar from './AdminSidebar';

const Deptlist = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function GetDeptlist(){
      try {
        const response = await fetch('http://localhost:8080/api/v1/Department/DepartmentList', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Failed to submit request');
        }
        const data = await response.json(); // Parse response body as JSON
      
        setDepartments(data); // Update departments state with the fetched data
    
      } catch (error) {
        console.error('Error submitting request:', error);
      }
    }
    GetDeptlist();
    
  },[])
  

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
                <td className='border py-2 px-4'>{dept.DepartmentName}</td>
                <td className='border py-2 px-4'></td>
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>
    </div>
  );
};

export default Deptlist;
