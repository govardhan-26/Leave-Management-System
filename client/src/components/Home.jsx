import React from 'react';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
 const navigate = useNavigate();
  const signinhandler = () =>{
    navigate('/login');
  }
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <header className="bg-blue-500 text-white py-8">
        <h1 className="text-4xl text-center">
          Welcome to Leave Management System
        </h1>
      </header>
      <main className="flex-grow container mx-auto py-8">
        <section className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-4">
            <li>Apply for leave</li>
            <li>Forward leave to superiors</li>
            <li>Approve or reject leave requests (for managers)</li>
            <li>View leave history</li>
          </ul>
        </section>
        <section className="max-w-md mx-auto mt-8 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-4">
            Sign in to manage your leave requests and balance.
          </p>
          <button onClick={signinhandler} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
            Sign In
          </button>
        </section>
      </main>
      <footer className="text-center text-gray-600 py-4">
        <p>&copy; 2024 Leave Management System</p>
      </footer>
    </div>
  )
}

export default HomePage
