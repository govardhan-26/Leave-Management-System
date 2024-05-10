import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('user') // Default to 'user'
  const navigate = useNavigate()

  console.log(userType)
  console.log(email)
  console.log(password)

  const loginhandler = (e) => {
    e.preventDefault()
    if (userType == 'user') {
      submithandler()
    } else if (userType == 'admin') {
      if (email == 'admin024@gmail.com' && password == 'Iiest24@admin') {
        console.log('hello')
        navigate('/admin')
      } else {
        toast.error('Admin login Err')
      }
    }
  }

  const submithandler = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/v1/Auth/LoginUser',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Email: email, Password: password }),
        },
      )
      const data = await response.json()
      setPassword('')
      setEmail('')
      if (!response.ok) {
        throw new Error('Failed to submit request')
      } else {
        localStorage.setItem('token', data.AccessToken)
        localStorage.setItem('userId', data.ids.userId)
        localStorage.setItem('manager', data.ids.managerId)
        toast.success('Logged In Succesfully')
        // navigate('/profile')
        window.location.href = "/profile";
      }
    } catch (error) {
      toast.error('Login Error, Try Again')
      console.error('Error Logging in', error)
      setPassword('')
      setEmail('')
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <header className="bg-blue-500 text-white py-8">
        <h1 className="text-4xl text-center">
          Welcome to Leave Management System
        </h1>
      </header>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[87vh] lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={loginhandler}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="userType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select User Type
                </label>
                <div className="flex items-center space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="user"
                      checked={userType === 'user'}
                      onChange={() => setUserType('user')}
                      className="mr-2"
                    />
                    User
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="admin"
                      checked={userType === 'admin'}
                      onChange={() => setUserType('admin')}
                      className="mr-2"
                    />
                    Admin
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
