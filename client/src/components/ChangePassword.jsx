import React from 'react'
import SidebarComponent from './SidebarComponent';



const ChangePassword = () => {
  return (
    <div className='flex'>
        <SidebarComponent/>
        <div className='w-full p-20 rounded-[5px] bg-gray-100 m-[3%]'>
            <h1 className='text-3xl'>Change Password</h1>
            <div className='h-[100%] w-[100%]'>
                <div className='flex m-5 items-center'>
                    <label htmlFor="NewPassword" className='m-5 font-bold'>New Password</label>
                    <input type="password" className='rounded-[8px] ml-8'/>
                </div>
                <div className='flex m-5 items-center'>
                    <label htmlFor="ConfirmPassword" className='m-5 font-bold'>Confirm Password</label>
                    <input type="password" className='rounded-[8px]'/>
                </div>
                <div className='border border-black w-[200px] flex items-center justify-center rounded-md h-[40px] bg-blue-400 ml-[450px]'>
                    Submit
                </div>
            </div>

        </div>
    </div>
  )
}

export default ChangePassword;