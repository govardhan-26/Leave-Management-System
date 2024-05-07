import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiTable, HiUser } from 'react-icons/hi';
import { SiReacthookform } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FcLeave } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';



const SidebarComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='md:flex h-[100vh] md:w-[fit-content] items-center border border-solid border-grey-500 w-[40px]  '>
      <div className='md:hidden flex flex-col space-y-10 mt-[30px] ml-[5px]'>
          <HiChartPie size={25}/>
          <HiUser size={25}/>
          <SiReacthookform size={25}/>
          <CiLogout size={25}/>
      </div>
    <Sidebar className='md:block hidden'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={FcLeave} label="Leaves">
            <Sidebar.Item href="/leavereq" icon={MdOutlinePendingActions}>Leave Requests</Sidebar.Item>
            <Sidebar.Item href="leavehistory" icon={SlCalender}>Leave History</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="profile" icon={HiUser}>
            Profile
          </Sidebar.Item>
          <Sidebar.Item href="application" icon={SiReacthookform}>
            Leave Application
          </Sidebar.Item>
          <Sidebar.Item href="/changepassword" icon={CiLogout}>
            Change Password
          </Sidebar.Item>
          <Sidebar.Item icon={CiLogout}>
            <div onClick={()=>{ 
              navigate("/");
              localStorage.removeItem("token");
              localStorage.removeItem("UserDetails");
             }}>
              Logout
            </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}

export default SidebarComponent;