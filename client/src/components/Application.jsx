import React, { useEffect, useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { toast } from "sonner";

const Application = () => {
  const [StartLeaveDate, setStartLeaveDate] = useState("");
  const [EndLeaveDate, setEndLeaveDate] = useState("");
  const [reason, setReason] = useState("");
  const [LeaveType, setLeaveType] = useState("");
  const [LeaveTypeOptions, setLeaveTypeOptions] = useState([]);

  const EmployeeId = localStorage.getItem("userId");
  const Manager_Id = localStorage.getItem("manager");
  const Superior_Id = localStorage.getItem("manager");

  useEffect(() => {
    Leavetypes();
  }, []);

  const NumOfDays = getDaysDifference(StartLeaveDate, EndLeaveDate);
  console.log(NumOfDays);

  const Leavetypes = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/LeaveType/LeaveTypeDropDown",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setLeaveTypeOptions(data);
      }
    } catch (error) {
      console.error("Error getting Info", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const NumOfDays = getDaysDifference(StartLeaveDate, EndLeaveDate);
    const LeaveData = {
      EmployeeId,
      StartLeaveDate,
      EndLeaveDate,
      LeaveDetails: reason,
      LeaveType,
      NumOfDays,
      Manager_Id,
      Superior_Id,
    };
    if (NumOfDays <= 0) {
      toast.error("Select appropriate Dates");
    } else {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/Leave//LeaveCreate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(LeaveData),
          }
        );
        if (response.ok) {
          console.log("Created Successfully");
          setLeaveType("");
          setStartLeaveDate("");
          setEndLeaveDate("");
          setReason("");
          toast.success("Leave Created Succesfully");
        }
      } catch (err) {
        console.error("Error submitting request:", err);
      }
    }
  };

  function getDaysDifference(startDate, endDate) {
    const startMs = new Date(startDate).getTime();
    const endMs = new Date(endDate).getTime();
    const differenceMs = endMs - startMs;
    const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    return daysDifference + 1;
  }

  return (
    <div className="flex">
      <SidebarComponent />
      <div className="w-full p-10">
        <h1 className="text-3xl font-bold mb-6">Leave Application</h1>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="StartDate" className="font-bold">
                Start Date:
              </label>
              <input
                type="date"
                className="block w-full rounded-md border-gray-300 shadow-sm"
                value={StartLeaveDate}
                onChange={(e) => setStartLeaveDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="EndDate" className="font-bold">
                End Date:
              </label>
              <input
                type="date"
                className="block w-full rounded-md border-gray-300 shadow-sm"
                value={EndLeaveDate}
                onChange={(e) => setEndLeaveDate(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="reason" className="font-bold">
              Reason:
            </label>
            <textarea
              rows="4"
              className="block w-full rounded-md border-gray-300 shadow-sm"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="LeaveType" className="font-bold">
              Leave Type:
            </label>
            <select
              className="block w-full rounded-md border-gray-300 shadow-sm"
              value={LeaveType}
              onChange={(e) => setLeaveType(e.target.value)}
            >
              <option value="">Select Leave Type</option>
              {LeaveTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 flex">
            <label htmlFor="LeaveType" className="font-bold">
              No Of Days:
            </label>
            &nbsp;
            <h1>{isNaN(NumOfDays) ? 0 : NumOfDays}</h1>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
