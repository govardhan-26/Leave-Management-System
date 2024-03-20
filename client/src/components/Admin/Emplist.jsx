import React, { useEffect, useState } from "react";
import SidebarComponent from "../SidebarComponent";
import AdminSidebar from "./AdminSidebar";

const Emplist = () => {
  const [employees, setEmployees] = useState([]);

  const [DepartmentName, SetDepartmentName] = useState("");
  const [DepartmentID, SetDepartmentID] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('YOUR_API_ENDPOINT');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   console.log(DepartmentName);

  // },)

  const fetchDeptId = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/Department/DepartmentList",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit request");
      }
      const data = await response.json();
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].DepartmentName === DepartmentName) {
          SetDepartmentID(data[i]._id);
        }
      }

      const departments = await fetch(`http://localhost:8080/api/v1/Employee/EmployeeList/${DepartmentID}`,
      {
        method : "GET",
        headers : {
          "content-Type" : "application/json",
        },
      });
      if(!departments.ok){
        throw new Error("Cant Fetch Depts");
      }

      setEmployees(departments);

    } catch (error) {
      console.error("Error fetching department:", error);
    }
  };

 

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-full p-20 rounded-[5px] bg-gray-100 m-[3%]">
        <div className="flex items-center pl-[3%] w-[100%] h-[45px] ">
          <b>
            <h1>Department Name {":"} </h1>
          </b>
          <input
            type="text"
            className="ml-[2%]"
            onChange={(e) => {
              SetDepartmentName(e.target.value);
            }}
          />
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
                <td className="border py-2 px-4">{employee.name}</td>
                <td className="border py-2 px-4">{employee.Gender}</td>
                <td className="border py-2 px-4">{employee.phoneNumber}</td>
                <td className="border py-2 px-4">{employee.email}</td>
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
