import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Flowbite } from "flowbite-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Profile from "./components/Profile.jsx";
import LeaveReq from "./components/LeaveReq.jsx";
import LeaveHistory from "./components/LeaveHistory.jsx";
import Application from "./components/Application.jsx";
import Createdept from "./components/Admin/Createdept.jsx";
import Deptlist from "./components/Admin/Deptlist.jsx";
import Leavetype from "./components/Admin/Leavetype.jsx";
import Leavelist from "./components/Admin/Leavelist.jsx";
import CreateEmp from "./components/Admin/CreateEmp.jsx";
import Emplist from "./components/Admin/Emplist.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import ModifyEmp from "./components/Admin/ModifyEmp.jsx";
import ProtectedRoute from "./components/AuthProvider.jsx";
import { RecoilRoot } from "recoil";

import { Toaster } from "sonner";
import ChangePassword from "./components/ChangePassword.jsx";
import OTPInput from "./components/OTPInput.jsx";
import PendingReq from "./components/PendingReq.jsx";
import AcceptedReq from "./components/AcceptedReqs.jsx";
import RejectedReq from "./components/RejectedReqs.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>

    <Flowbite>
      <BrowserRouter>
        <Routes>
          <Route path="/Otp" element={<OTPInput />} />
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/approvedreq"
            element={
              <ProtectedRoute>
                <AcceptedReq />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pendingreq"
            element={
              <ProtectedRoute>
                <PendingReq />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rejectedreq"
            element={
              <ProtectedRoute>
                <RejectedReq />
              </ProtectedRoute>
            }
          />
          <Route
            path="/changepassword"
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leavereq"
            element={
              <ProtectedRoute>
                <LeaveReq />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leavehistory"
            element={
              <ProtectedRoute>
                <LeaveHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/application"
            element={
              <ProtectedRoute>
                <Application />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
                <AdminDashboard />
            }
          />
          <Route
            path="/admin/createdept"
            element={
                <Createdept />
            }
          />
          <Route
            path="/admin/createdeptlist"
            element={
                <Deptlist />
            }
          />
          <Route
            path="/admin/Leavetype"
            element={
                <Leavetype />
            }
          />
          <Route
            path="/admin/Leavetypelist"
            element={
                <Leavelist />
            }
          />
          <Route
            path="/admin/Employee"
            element={
                <CreateEmp />
            }
          />
          <Route
            path="/admin/Employeelist"
            element={
                <Emplist />
            }
          />
          <Route
            path="/ModifyEmp/:id"
            element={
                <ModifyEmp />
            }
          />
        </Routes>
      </BrowserRouter>
    </Flowbite>
    <Toaster
          toastOptions={{
            className: "py-3",
          }}
          expand={true}
          position="top-right"
          richColors
          closeButton
        ></Toaster>
    </RecoilRoot>
  </React.StrictMode>
);
