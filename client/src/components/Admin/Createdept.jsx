import React, { useState } from 'react';
import SidebarComponent from '../SidebarComponent';
import AdminSidebar from './AdminSidebar';
import { toast } from 'sonner';

const Createdept = () => {
  const [isActive, setIsActive] = useState(true);
const [departmentDetails, setDepartmentDetails] = useState({
  DepartmentName: '',
  DepartmentShortName: '',
  DepartmentStatus: true, // Set initial value to true
  DepartmentDetails: '',
});

const handleCheckboxChange = () => {
  // Toggle isActive state
  setIsActive(!isActive);
  
  // Update DepartmentStatus based on isActive
  setDepartmentDetails(prevState => ({
    ...prevState,
    DepartmentStatus: !isActive // Set DepartmentStatus to opposite of isActive
  }));
};
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDepartmentDetails({
      ...departmentDetails,
      [name]: value,
    });
  };

  const submitRequest = async (event) => {
    event.preventDefault();
    console.log(departmentDetails);
    try {
      const response = await fetch('http://localhost:8080/api/v1/Department/DepartmentCreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(departmentDetails),
      });
      toast.success("Department Created");
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='w-[100%] p-20 rounded-[5px] bg-gray-100 m-[3%]'>
        <form onSubmit={submitRequest}>
          <div className='flex text-center items-center justify-evenly'>

          
            <div className='flex text-center items-center justify-evenly '>
              <div className='flex items-center'>
                <h1 className='border  '>Department Name {":"} &nbsp;</h1>
                <input type="text" className='rounded-[5px]' name='DepartmentName' value={departmentDetails.DepartmentName} onChange={handleInputChange}/>
              </div>
              <div className='flex items-center border '><b>Department ShortName : &nbsp;</b><input type="text" className='rounded-[5px]' name='DepartmentShortName' value={departmentDetails.DepartmentShortName} onChange={handleInputChange}/></div>
            </div>

          </div>
          <div className='flex text-center mt-[30px] justify-start pl-[131px]'>
            <h1><b>Department Details : &nbsp;</b></h1>
            <textarea type='text' className='w-[100%] h-[20vh] rounded-[5px]' name='DepartmentDetails' value={departmentDetails.DepartmentDetails} onChange={handleInputChange}></textarea>
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

export default Createdept;
