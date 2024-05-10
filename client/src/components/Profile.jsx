import React, { useEffect, useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { userdetailsAtom } from "../store/atoms";

const Profile = () => {
  const { state, contents } = useRecoilValueLoadable(userdetailsAtom);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [position, setPosition] = useState("Employee");
  const [dob, setDOB] = useState(new Date());
  const [department, setDepartment] = useState("");
  const refetch = useRecoilRefresher_UNSTABLE(userdetailsAtom);

  

  const submitHandler = async () => {
    try {
      const result = await fetch(
        `http://localhost:8080/api/v1/Employee/EmployeeUpdate/${contents._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FirstName,
            LastName,
            DateOfBirth: dob,
            Phone: phoneNumber,
            Gender: gender,
          }),
        }
      );
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (state !== "loading") {
      const date = new Date(contents.DateOfBirth);
      const formattedDate = date.toISOString().split("T")[0];
      setDOB(formattedDate);
      setFirstName(contents.FirstName);
      setLastName(contents.LastName);
      setEmail(contents.Email);
      setPhoneNumber(contents.Phone);
      setDepartment(contents?.DepartmentId?.DepartmentName);
      if (contents.Roles === "Role_A") {
        setPosition("Employee");
      } else if (contents.Roles === "Role_B") {
        setPosition("Team Head");
      } else if (contents.Roles === "Role_C") {
        setPosition("HOD");
      } else {
        setPosition("Head Of Organization");
      }
    }
  }, [state]);

  return (
    <div className="flex h-screen w-screen">
      <SidebarComponent />
      <div className="flex w-full p-10 flex-col">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <form className="bg-gray-100 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="FirstName" className="font-bold">First Name:</label>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="First Name"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="LastName" className="font-bold">Last Name:</label>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Last Name"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-[100%] justify-start gap-x-4">
          <div className="mt-4 w-[50%]">
            <label htmlFor="email" className="font-bold">Email:</label>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="email@gmailcom"
              value={email}
              readOnly
            />
          </div>
          <div className="mt-4 w-[50%]">
            <label htmlFor="dob" className="font-bold">Date of Birth:</label>
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          </div>
          
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="gender" className="font-bold">Gender:</label>
              <select
                id="gender"
                name="gender"
                className="block w-full rounded-md border-gray-300 shadow-sm"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                <option value="Prefer Not to Say">Prefer Not to say</option>
              </select>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="font-bold">Phone Number:</label>
              <input
                type="tel"
                className="block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Enter your Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <label htmlFor="organization" className="font-bold m-1 ml-0">Organization:</label>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm"
              value = "Google Pvt Ltd"
              readOnly
            />
          </div>
          <div className="mt-4 flex items-center">
            <label htmlFor="position" className="font-bold">Position:</label>
            &nbsp;
            <h1 className="text-xl text-blue-600">{position}</h1>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={submitHandler}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none "
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
