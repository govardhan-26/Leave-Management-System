import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiTable, HiUser } from 'react-icons/hi';
import { SiReacthookform } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FcLeave } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const SidebarComponent = () => {
  return (
    <div className='flex h-[100vh] w-[fit-content] items-center border border-solid border-grey-500'>
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
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
          <Sidebar.Item href="/Login" icon={CiLogout}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}

export default SidebarComponent;