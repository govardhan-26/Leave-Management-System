import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Flowbite } from 'flowbite-react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import Profile from './components/Profile.jsx'
import LeaveReq from './components/LeaveReq.jsx'
import LeaveHistory from './components/LeaveHistory.jsx'
import Application from './components/Application.jsx'
import Admin1 from "./components/Admin1.jsx"
import AdminCreatedept from './components/AdminCreatedept.jsx'
import Admindeptlist from './components/Admindeptlist.jsx'
import AdminLeavetype from './components/AdminLeavetype.jsx'
import Adminemp from './components/Adminemp.jsx'
import Adminemplist from './components/Adminemplist.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Flowbite>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/leavereq' element={<LeaveReq/>} />
            <Route path='/leavehistory' element={<LeaveHistory/>} />
            <Route path='/application' element={<Application/>} />
            <Route path='/admin' element={<Admin1/>} />
            <Route path='/admin/createdept' element={<AdminCreatedept/>} />
            <Route path='/admin/createdeptlist' element={<Admindeptlist/>} />
            <Route path='/admin/Leavetype' element={<AdminLeavetype/>} />
            <Route path='/admin/Employee' element={<Adminemp/>} />
            <Route path='/admin/Employeelist' element={<Adminemplist/>} />
            
            

          </Routes>
      </BrowserRouter>
    </Flowbite>
  </React.StrictMode>,
)
