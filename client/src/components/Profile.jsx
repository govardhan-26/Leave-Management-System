import React from 'react'
import SidebarComponent from './SidebarComponent'


const Profile = () => {
  const submitHandler = () =>{
    console.log("Hello");
  }
  return (
    <div className='flex'>
        <SidebarComponent/>
        <div className='flex w-[100%]'>
          <form  className='flex flex-col border rounded-[10px] m-[3%] w-[100%] bg-gray-100'>
            <div className='m-[3%] w-[100%] flex  h-[10%]'>
              <div className='w-[100%] '>
                <label htmlFor="Name">Name : </label>
                <input type="text" className='rounded-[5px] w-[60%]' placeholder='Govardhan Rao Naidu'/>
              </div>
              <div className='w-[100%] '>
                <label htmlFor="email">Email : </label>
                <input type="text" className='rounded-[5px] w-[60%]' placeholder='email@gmailcom'/>
              </div>
            </div>
            <div className='flex m-[3%] items-center'>
                <label htmlFor="org">Name of the Organization : &nbsp;</label>
                <input type="text" className='rounded-[5px] w-[60%]' placeholder='Indian Institute of Engineering Science and Technology'/>
            </div>
            <div className='flex m-[3%] items-center'>
              <div className='flex w-[100%] items-center'>
                <label htmlFor="responsibility">Position of Responsibility : &nbsp;</label>
                <select id="positions" name="positions" className='rounded-[5px] w-[40%]'>
                  <option value="Professor">Professor</option>
                  <option value="HOD">HOD</option>
                  <option value="Dean">Dean</option>
                  <option value="Director">Director</option>
                </select>
              </div>
              <div className='flex w-[100%] items-center'>
                <label htmlFor="responsibility">Department : &nbsp;</label>
                <select id="positions" name="positions" className='rounded-[5px] w-[60%]'>
                  <option value="Professor">CST</option>
                  <option value="HOD">IT</option>
                  <option value="Dean">ETC</option>
                  <option value="Director">EE</option>
                  <option value="Dean">MECH</option>
                  <option value="Director">META</option>
                </select>
              </div>
            </div>
            <div className='flex m-[3%]'>
              <div className='w-[100%] '>
                <label htmlFor="Name">Change Password : </label>
                <input type="password" className='rounded-[5px] w-[60%]' />
              </div>
              <div className='w-[100%] '>
                <label htmlFor="email">Confirm Password : </label>
                <input type="password" className='rounded-[5px] w-[60%]' />
              </div>
            </div>
            <div className='flex m-[3%] justify-end'>
              <button type="button" onClick={submitHandler} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Update Profile</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Profile