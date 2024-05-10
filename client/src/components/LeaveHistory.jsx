import React from "react";
import SidebarComponent from "./SidebarComponent";

import { useRecoilValueLoadable } from "recoil";
import { leaveListAtom } from "../store/atoms";
const LeaveHistory = () => {
  const { state, contents } = useRecoilValueLoadable(leaveListAtom);
  function getFormatedDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  }
  return (
    <div className="flex">
      <SidebarComponent />
      <div className="flex w-[100%] ">
        <div className="m-[3%] border gray-red-700 w-[100%] flex flex-col">
          <h1 className="m-[20px] text-2xl text-center">Leave History</h1>
          {state == "loading" ? (
            <h1>Loading...</h1>
          ) : (
            <div className="border gray-red-700">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">
                      Type of Leave
                    </th>
                    <th className="border border-gray-300 px-4 py-2">From</th>
                    <th className="border border-gray-300 px-4 py-2">To</th>
                    <th className="border border-gray-300 px-4 py-2">
                      No of Days
                    </th>
                    <th className="border border-gray-300 px-4 py-2 w-[40%]">
                      Leave Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contents.map((leave, leaveid) => (
                    <tr
                      className={leaveid % 2 === 0 ? "bg-white" : "bg-gray-100"}
                      key={leave._id}
                    >
                      {console.log(leave)}
                      <td className="border border-gray-300 px-4 py-2">
                        {leave.LeaveDetails}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {getFormatedDate(leave.StartLeaveDate)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {getFormatedDate(leave.EndLeaveDate)}
                      </td>
                      <td className="border text-center border-gray-300 px-4 py-2">
                        {leave.NumOfDays}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                        {leave.Manager_Status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;

