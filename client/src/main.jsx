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
import Createdept from './components/Admin/Createdept.jsx'
import Deptlist from './components/Admin/Deptlist.jsx'
import Leavetype from './components/Admin/Leavetype.jsx'
import Leavelist from './components/Admin/Leavelist.jsx'
import CreateEmp from './components/Admin/CreateEmp.jsx'
import Emplist from './components/Admin/Emplist.jsx'
import AdminDashboard from './components/Admin/AdminDashboard.jsx'





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
            <Route path='/admin' element={<AdminDashboard/>} /> 
            <Route path='/admin/createdept' element={<Createdept/>} />
            <Route path='/admin/createdeptlist' element={<Deptlist/>} />
            <Route path='/admin/Leavetype' element={<Leavetype/>} />
            <Route path='/admin/Leavetypelist' element={<Leavelist/>} />
            <Route path='/admin/Employee' element={<CreateEmp/>} />
            <Route path='/admin/Employeelist' element={<Emplist/>} />
            
            

          </Routes>
      </BrowserRouter>
    </Flowbite>
  </React.StrictMode>,
)
