import React, { useEffect, useState } from 'react';
import SidebarComponent from './SidebarComponent';

const Application = () => {
  // Define state variables for each input
  const [StartLeaveDate, setStartLeaveDate] = useState('');
  const [EndLeaveDate, setEndLeaveDate] = useState('');
  const [reason, setReason] = useState('');
  const [LeaveType, setLeaveType] = useState('');
  const [NumOfDays, setNumOfDays] = useState('');
  const [LeaveTypeOptions, setLeaveTypeOptions] = useState([]);
  const UserDetails = JSON.parse(localStorage.getItem("UserDetails"))
  
  const EmployeeId = UserDetails._id;

  const LeaveDetails = reason;
  console.log(LeaveType)

    const Leavetypes = async () =>{
        try{
            const response = await fetch("http://localhost:8080/api/v1/LeaveType/LeaveTypeDropDown",
                {
                    method : "GET",
                    headers : {"Content-Type" : "application/json"}
                },
            );
            if(response.ok){
                const data = await response.json();
                setLeaveTypeOptions(data)
            }
        }
        catch(error){
            console.error("Error getting Info", error);
        }
    }

    useEffect(() => {
      Leavetypes();
    }, [])
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    const LeaveData = {
        EmployeeId,
        StartLeaveDate,
        EndLeaveDate,
        LeaveDetails,
        LeaveType,
        NumOfDays
      }  
    console.log(LeaveData);
    try{
        const response = await fetch("http://localhost:8080/api/v1/Leave//LeaveCreate",{
        method : "POST",    
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(LeaveData),
        }) 
        if(response.ok){
            console.log("Created Successfully")
        }
    }
    catch (err){
        console.error('Error submitting request:', err);
    }
  };

  return (
    <div className='flex'>
      <SidebarComponent/>
      <div className='w-[100%]  p-20 rounded-[5px] bg-gray-100 m-[3%]'>
        <form onSubmit={handleSubmit}>
          <div className='flex text-center  items-center justify-evenly'>
            <h1><b>Dates :</b></h1>
            <div>    
              <label>From &nbsp;</label>
              <input 
                type='date' 
                className='rounded-[5px]' 
                value={StartLeaveDate} 
                onChange={(e) => setStartLeaveDate(e.target.value)} 
              />
            </div>
            <div>
              <label>To &nbsp;</label>
              <input 
                type='date' 
                className='rounded-[5px]' 
                value={EndLeaveDate} 
                onChange={(e) => setEndLeaveDate(e.target.value)} 
              />
            </div>
          </div>
          <div className='flex text-center mt-[30px]  justify-start  pl-[131px]'>
            <h1><b>Reason : &nbsp;</b></h1>
            <textarea 
              type='text' 
              className='w-[100%] h-[20vh] rounded-[5px]' 
              value={reason} 
              onChange={(e) => setReason(e.target.value)} 
            />
          </div>
          <div className='flex text-center mt-[30px] items-center justify-start  pl-[131px]'>
            <h1><b>Type of Leave : &nbsp;</b></h1>
            <select 
              id="dropdown" 
              name="selectedOption" 
              className='rounded-[5px]'
              value={LeaveType}
              onChange={(e) => setLeaveType(e.target.value)}
            >
            {LeaveTypeOptions.map((LeaveType, index) => (

              <option key={index} value={LeaveType.value}>{LeaveType.label}</option>
            ))}
            
            </select>
          </div>
          <div className='flex text-center mt-[30px] items-center justify-start  pl-[131px]'>
            <h1><b>No. of Days : &nbsp;</b></h1>
            <input 
              type="number" 
              className='rounded-[5px]'
              value={NumOfDays}
              onChange={(e) => setNumOfDays(e.target.value)} 
            />
          </div>
          <div className='flex text-center mt-[30px] items-center justify-end  pl-[150px]'>
            <button 
              type='submit' 
              className='text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Submit Req
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
