import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-semibold mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Employee</h2>
            {/* Form to create employee */}
            <Link
              to={'/admin/employee'}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Create
            </Link>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Department</h2>
            {/* Form to create department */}
            <Link
              to={'/admin/createdept'}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Create
            </Link>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Leave Type</h2>
            {/* Form to create leave type */}
            <Link
              to={'/admin/Leavetype'}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Create
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
