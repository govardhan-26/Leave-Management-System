import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiTable, HiUser } from "react-icons/hi";
import { SiReacthookform } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FcLeave } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { TbPasswordUser } from "react-icons/tb";
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { userdetailsAtom } from "../store/atoms";

const SidebarComponent = () => {
  const navigate = useNavigate();
  const { state, contents } = useRecoilValueLoadable(userdetailsAtom);

  const role = contents.Roles;

  if(state == "hasValue"){
  }

  return (
    <div className="md:flex h-[100vh] md:w-[fit-content] items-center border border-solid border-grey-500 w-[40px]  ">
      <div className="md:hidden flex flex-col space-y-10 mt-[30px] ml-[5px]">
        <HiChartPie size={25} />
        <HiUser size={25} />
        <SiReacthookform size={25} />
        <CiLogout size={25} />
      </div>
      <Sidebar className="md:block hidden">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* <Sidebar.Item href="/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item> */}
            <Sidebar.Item href="profile" icon={HiUser}>
              Profile
            </Sidebar.Item>
            {role != "Role_A" ?
            (<Sidebar.Collapse icon={FcLeave} label="Leaves">
              <Sidebar.Item href="/pendingreq" icon={MdOutlinePendingActions}>
                Pending Requests
              </Sidebar.Item>
              <Sidebar.Item href="/approvedreq" icon={MdOutlinePendingActions}>
                Approved Requests 
              </Sidebar.Item>
              <Sidebar.Item href="/rejectedreq" icon={MdOutlinePendingActions}>
                Rejected Requests
              </Sidebar.Item>
              <Sidebar.Item href="/leavereq" icon={MdOutlinePendingActions}>
                All Requests
              </Sidebar.Item>
            </Sidebar.Collapse>) : <></>
            }
            <Sidebar.Item href="application" icon={SiReacthookform}>
              Leave Application
            </Sidebar.Item>
            <Sidebar.Item href="leavehistory" icon={SlCalender}>
                Leave History
              </Sidebar.Item>
            <Sidebar.Item href="/changepassword" icon={TbPasswordUser}>
              Change Password
            </Sidebar.Item>
            <Sidebar.Item icon={CiLogout}>
              <div
                onClick={() => {
                  navigate("/");
                  localStorage.removeItem("token");
                  localStorage.removeItem("userId");
                }}
              >
                Logout
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;

