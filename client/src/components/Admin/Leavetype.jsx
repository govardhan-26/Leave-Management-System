import React, { useState } from 'react';
import SidebarComponent from '../SidebarComponent';
import AdminSidebar from './AdminSidebar';

const Leavetype = () => {
  const [isActive, setIsActive] = useState(true);

  const [LeaveTypes, setLeaveTypes] = useState({
    LeaveTypeName: '',
    LeaveTypeDetails: '',
    LeaveTypeStatus: true, 
  });

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
    
    setLeaveTypes(prevState => ({
      ...prevState,
      LeaveTypeStatus: !prevState.LeaveTypeStatus 
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaveTypes({
      ...LeaveTypes,
      [name]: value,
    });
  };

  

  const submitRequest =async (event) => {
    event.preventDefault();
    console.log(LeaveTypes);
    try{
      const response = await fetch('http://localhost:8080/api/v1/LeaveType/LeaveTypeCreate',{
        method : "POST",
        headers : {
          "content-Type" : "application/json",
        },
        body: JSON.stringify(LeaveTypes),
      })
      if(!response.ok){
        console.log("Error Creating LeaveType")
      }
    }
    catch(error){
        console.error('Error submitting request:', error);      
    }
  };

  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='w-[100%] p-20 rounded-[5px] bg-gray-100 m-[3%]'>
        <form onSubmit={submitRequest}>
          <div className='flex text-center items-center justify-evenly'>
            <div className='flex text-center mt-[30px] items-center justify-start pl-[131px]'>
              <h1><b>Leave Type : &nbsp;</b></h1>
              <input
                type='text'
                name='LeaveTypeName'
                value={LeaveTypes.LeaveTypeName}
                onChange={handleInputChange}
                className='rounded-[5px]' />
            </div>
          </div>
          <div className='flex text-center mt-[30px] justify-start pl-[130px]'>
            <h1><b>Leave Details: &nbsp;</b></h1>
            <textarea type='text' className='w-[80%] h-[20vh] rounded-[5px]' name='LeaveTypeDetails' value={LeaveTypes.LeaveTypeDetails} onChange={handleInputChange}></textarea>
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

export default Leavetype;

