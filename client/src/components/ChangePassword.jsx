import React, { useState } from 'react'
import SidebarComponent from './SidebarComponent';
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { userdetailsAtom } from "../store/atoms";
import { toast } from 'sonner';


const ChangePassword = () => {
    const { state, contents } = useRecoilValueLoadable(userdetailsAtom);
    const [PreviousPassword, setPreviousPassword] = useState("");
    const [NewPassword, setNewPassword] = useState("");

  const UserId = localStorage.getItem("userId");

    if(state == "hasValue"){
    }

    console.log(PreviousPassword);

    const changepassword = async () => {
        try {
          const response = await fetch(
            "http://localhost:8080/api/v1/Employee/EmployeeChangePassword/" + UserId,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                Email : contents.Email,
                PreviousPassword : PreviousPassword,
                NewPassword : NewPassword,
              }),
            }
          );
          if (response.ok) {
            const data = await response.json();
            SetLeaveRequests(data);
            toast.success("Password Changed");
          }
        } catch (err) {
          console.error("Error Getting Requests", err);
        }
      };

  return (
    <div className='flex'>
        <SidebarComponent/>
        <div className='w-full p-20 rounded-[5px] bg-gray-100 m-[3%]'>
            <h1 className='text-3xl'>Change Password</h1>
            <div className='h-[100%] w-[100%]'>
                <div className='flex m-5 items-center'>
                    <label htmlFor="NewPassword" className='m-5 font-bold' >Previous Password</label>
                    <input type="password" className='rounded-[8px] ml-8' onChange={(e)=>{setPreviousPassword(e.target.value)}}/>
                </div>
                <div className='flex m-5 items-center'>
                    <label htmlFor="ConfirmPassword" className='m-5 font-bold'>New Password</label>
                    <input type="password" onChange={(e)=>{setNewPassword(e.target.value)}} className='rounded-[8px] ml-[69px]'/>
                </div>
                <div onClick={changepassword} className='border border-black w-[200px] flex items-center justify-center rounded-md h-[40px] bg-blue-400 ml-[150px] mt-[50px]'>
                    Submit
                </div>
            </div>

        </div>
    </div>
  )
}

export default ChangePassword;