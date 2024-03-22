import React, { useEffect, useState } from "react";
import SidebarComponent from "../SidebarComponent";
import AdminSidebar from "./AdminSidebar";

const Emplist = () => {
  const [employees, setEmployees] = useState([]);
  const [DepartmentName, SetDepartmentName] = useState("");
  const [DepartmentID, SetDepartmentID] = useState("");
  const [Departments, setDepartments] = useState([]);


  useEffect(() => {
    async function GetDeptlist(){
      try {
        const response = await fetch('http://localhost:8080/api/v1/Department/DepartmentList', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Failed to submit request');
        }
        const data = await response.json(); // Parse response body as JSON
      
        setDepartments(data); // Update departments state with the fetched data
    
      } catch (error) {
        console.error('Error submitting request:', error);
      }
    }
    GetDeptlist();
    
  },[])

  

  const fetchDeptId = async () => {
    for (let i = 0; i < Departments.length; i++) {
      if (Departments[i].DepartmentName === DepartmentName) {
        SetDepartmentID(Departments[i]._id);
      }
    }
    try {
      const Emps = await fetch(`http://localhost:8080/api/v1/Employee/EmployeeList/${DepartmentID}`,
      {
        method : "GET",
        headers : {
          "content-Type" : "application/json",
        },
      });
      if(!Emps.ok){
        throw new Error("Cant Fetch Depts");
      }
      const emps = await Emps.json();
      setEmployees(emps);
      console.log(emps);

    } catch (error) {
      console.error("Error fetching department:", error);
    }
  };

  useEffect(() => {
    fetchDeptId();
  }, [DepartmentName])

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-full p-20 rounded-[5px] bg-gray-100 m-[3%]">
        <div className="flex items-center pl-[3%] w-[100%] h-[45px] ">
          <b>
            <h1>Department Name {":"} </h1>
          </b>
          <select
                name="DepartmentName"
                onChange={(e) => {
                  SetDepartmentName(e.target.value);
                }}
                className="rounded-[5px] w-[80%]"
              >
                <option value="">Select Department</option>
                {Departments.map((dept, index) => (
                  <option value={dept.DepartmentName} key={index}>{dept.DepartmentName}</option>
                ))}
                               
              </select>
          <button
            className="h-[75%]  bg-blue-500 ml-[10%] p-[2%] text-white flex items-center justify-center rounded"
            onClick={fetchDeptId}
          >
            Get List
          </button>
        </div>
        <h2 className="text-center mb-4">Employee List</h2>
        <table className="border-collapse w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border py-2 px-4">Sl. No.</th>
              <th className="border py-2 px-4">Employee Name</th>
              <th className="border py-2 px-4">Gender </th>
              <th className="border py-2 px-4">Phone Number</th>
              <th className="border py-2 px-4">Email</th>
              <th className="border py-2 px-4">Actions</th>{" "}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                key={index}
              >
                <td className="border py-2 px-4">{index + 1}</td>
                <td className="border py-2 px-4">{employee.FirstName}</td>
                <td className="border py-2 px-4">{employee.Gender}</td>
                <td className="border py-2 px-4">{employee.Phone}</td>
                <td className="border py-2 px-4">{employee.Email}</td>
                <td className="border py-2 px-4">
                  <button
                   
                    className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg"
                  >
                    Modify
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex text-center mt-[30px] items-center justify-end">
          <button
            type="submit"
            className="text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Emplist;
