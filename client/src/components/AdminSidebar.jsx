import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiTable, HiUser } from 'react-icons/hi';
import { SiReacthookform } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FcLeave } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const AdminSidebar = () => {
  return (
    <div className='flex h-[100vh] w-[fit-content] items-center border border-solid border-grey-500'>
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={FcLeave} label="Department">
            <Sidebar.Item href="/admin/createdept" icon={MdOutlinePendingActions}>New Department</Sidebar.Item>
            <Sidebar.Item href="/Dept List" icon={SlCalender}>Department List</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse icon={FcLeave} label="Leave Type">
            <Sidebar.Item href="/New Leave Type" icon={MdOutlinePendingActions}>New Leave Type</Sidebar.Item>
            <Sidebar.Item href="/Leave Type List" icon={SlCalender}>Leave Type List</Sidebar.Item>
          </Sidebar.Collapse>
          
          <Sidebar.Collapse icon={FcLeave} label="Employee">
            <Sidebar.Item href="/New_Emp" icon={MdOutlinePendingActions}>New Employee</Sidebar.Item>
            <Sidebar.Item href="/Emp List" icon={SlCalender}>Employee List</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="/Login" icon={CiLogout}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}

export default AdminSidebar;