import React, { useEffect, useState } from "react";
import SidebarComponent from "./SidebarComponent";

const Profile = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male"); // Default value is "Male"
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("Employee"); // Default value is "Employee"
  const [department, setDepartment] = useState("HR"); // Default value is "HR"
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const UserDetails = JSON.parse(localStorage.getItem("UserDetails"))
  const submitHandler = () => {
    console.log("Hello");
    console.log({
      FirstName,
      LastName,
      email,
      gender,
      phoneNumber,
      organization,
      position,
      department,
      password,
      confirmPassword
    });
  };

  const role = UserDetails.Roles;
   console.log(UserDetails);

  useEffect(() => {
    setFirstName(UserDetails.FirstName);
    setLastName(UserDetails.LastName)
    setEmail(UserDetails.Email);
    setPhoneNumber(UserDetails.Phone);
    if(role == "Role_A") {
      setPosition("Professor")}
    else if(role == "Role_B"){
      setPosition("HOD")
    }
    else{
      setPosition("Director")
    }
    // setDepartment(UserDetails.)

    
  }, [])
  

  return (
    <div className="flex h-screen w-screen">
      <SidebarComponent />
      <div className="flex w-[100%]">
        <form className="flex flex-col border rounded-[10px] m-[3%] w-[100%] border-black bg-gray-100 ">
          <div className="m-[3%] h-[100%] flex flex-col  items-center justify-evenly ">
            <div className=" w-[100%] flex  h-[10%] ">
              <div className="w-[100%] ">
                <label htmlFor="FirstName">FirstName : </label>
                <input
                  type="text"
                  className="rounded-[5px] w-[60%]"
                  placeholder="FirstName"
                  value={FirstName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-[100%] ">
                <label htmlFor="LastName">LastName : </label>
                <input
                  type="text"
                  className="rounded-[5px] w-[60%]"
                  placeholder="LastName"
                  value={LastName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-[100%] ">
                <label htmlFor="email">Email : </label>
                <input
                  type="text"
                  className="rounded-[5px] w-[60%]"
                  placeholder="email@gmailcom"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            <div className=" w-[100%] flex  h-[10%] ">
              <div className="w-[100%] ">
                <label htmlFor="Name">Gender : </label>
                <select
                  id="Gender"
                  name="Gender"
                  className="rounded-[5px] w-[40%]"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                  <option value="Prefer Not to Say">Prefer Not to say</option>
                </select>
              </div>
              <div className="w-[100%] ">
                <label htmlFor="Phone Number">Phone Number : </label>
                <input
                  type="tel"
                  className="rounded-[5px] w-[60%]"
                  placeholder="Enter your Mobile Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex  w-[100%] items-center">
              <label htmlFor="org">Name of the Organization : &nbsp;</label>
              <input
                type="text"
                className="rounded-[5px] w-[60%]"
                placeholder="pvt ltd"
                value={"Indian Institute of Engineering Science and Technlogy, Shibpur"}
                readOnly
              />
            </div>
            <div className="flex  w-[100%] items-center">
              <div className="flex w-[100%] items-center">
                <label htmlFor="responsibility">
                  Position of Responsibility : &nbsp;
                </label>
                {/* <select
                  id="positions"
                  name="positions"
                  className="rounded-[5px] w-[40%]"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option value="Employee">Employee</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Manager">Manager</option>
                  <option value="Director">Director</option>
                </select> */}
                <h1>{position}</h1>
              </div>
              <div className="flex w-[100%] items-center">
                <label htmlFor="responsibility">Department : &nbsp;</label>
                {/* <select
                  id="positions"
                  name="positions"
                  className="rounded-[5px] w-[60%]"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="HR">HR</option>
                  <option value="Technical">Technical</option>
                  <option value="Finance">Finance</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Customer Service">Customer Service</option>
                </select> */}
                <h1></h1>
              </div>
            </div>
            <div className="flex  w-[100%]">
              <div className="w-[100%] ">
                <label htmlFor="Name">Change Password : </label>
                <input
                  type="password"
                  className="rounded-[5px] w-[60%]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-[100%] ">
                <label htmlFor="email">Confirm Password : </label>
                <input
                  type="password"
                  className="rounded-[5px] w-[60%]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex m-[3%] justify-end">
              <button
                type="button"
                onClick={submitHandler}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none "
              >
                Update Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
