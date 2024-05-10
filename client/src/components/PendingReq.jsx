import React, { useEffect, useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { toast } from "sonner";

const PendingReq = () => {
  const UserId = localStorage.getItem("userId");
  const managerId = localStorage.getItem("manager");
  const [LeaveRequests, SetLeaveRequests] = useState([]);

  const AcceptReqs = async (ManagerId, LeaveId) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/Leave/LeaveUpdate/" + LeaveId,
        {
          method: "PATCH",
          headers: {
            // Authorization: "Bearer " + Usertoken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Superior_Id: ManagerId,
            Manager_Status: "Approved",
          }),
        }
      );
      window.location.href = "/pendingreq";
      if (response.ok) {
        toast.success('Leave Accepted')
      }
    } catch (err) {
      console.error("Error Accepting Requests", err);
    }
  };

  const RejectReqs = async (ManagerId, LeaveId) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/Leave/LeaveUpdate/" + LeaveId,
        {
          method: "PATCH",
          headers: {
            // Authorization: "Bearer " + Usertoken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Superior_Id: ManagerId,
            Manager_Status: "rejected",
          }),
        }
      );
      window.location.href = "/pendingreq";
      if (response.ok) {
        toast.success('Leave Rejected')
      }
    } catch (err) {
      console.error("Error Accepting Requests", err);
    }
  };

  const ForwardReqs = async (ManagerId, LeaveId) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/Leave/LeaveUpdate/" + LeaveId,
        {
          method: "PATCH",
          headers: {
            // Authorization: "Bearer " + Usertoken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Superior_Id: managerId,
            Manager_Status: "pending",
          }),
        }
      );
      window.location.href = "/pendingreq";
      if (response.ok) {
        toast.success('Leave Forwarded')
      }
    } catch (err) {
      console.error("Error Accepting Requests", err);
    }
  };

  const LeaveReqs = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/Leave/LeaveListManager",
        {
          method: "POST",
          headers: {
            // Authorization: "Bearer " + Usertoken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            EmployeeId: UserId,
            status: "pending",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        SetLeaveRequests(data);
      }
    } catch (err) {
      console.error("Error Getting Requests", err);
    }
  };

  useEffect(() => {
    LeaveReqs();
  }, []);

  return (
    <div className="flex">
      <SidebarComponent />
      <div className="flex w-[100%] ">
        <div className="m-[3%] border gray-red-700 w-[100%] flex flex-col">
          <h1 className="m-[20px] text-2xl text-center">Leave Requests</h1>

          <div className="border gray-red-700">
            <table className="w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Type of Leave
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    No of Days
                  </th>
                  <th className="border border-gray-300 px-4 py-2 w-[40%]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {LeaveRequests.map((leave, leaveid) => (
                  <tr
                    className={leaveid % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    key={leaveid}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {leave.EmployeeId.FirstName +
                        " " +
                        leave.EmployeeId.LastName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {leave.LeaveType.LeaveTypeName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {leave.NumOfDays}
                    </td>
                    {leave.Manager_Status != "pending" ? (
                      <td>{leave.Manager_Status}</td>
                    ) : (
                      <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                        <button
                          onClick={() => {
                            AcceptReqs(leave.Manager_Id, leave._id);
                          }}
                          className="border border-black rounded p-2 bg-green-300"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => {
                            ForwardReqs(leave.Manager_Id, leave._id);
                          }}
                          className="border border-black rounded p-2 bg-blue-200"
                        >
                          Forward
                        </button>
                        <button
                          className="border border-black rounded p-2 bg-red-500"
                          onClick={() => {
                            RejectReqs(leave.Manager_Id, leave._id);
                          }}
                        >
                          Reject
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingReq;
