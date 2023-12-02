import React from 'react'
import SidebarComponent from './SidebarComponent'

const LeaveHistory = () => {

  const Leaves = [
                    { 
                      Name : "Singa Sai Prasad",
                      Type_of_Leave : "Sick",
                      No_of_days : "10",
                      Result : "Rejected"
                    },
                    {
                      Name : "Sairam", 
                      Type_of_Leave : "Maternity",
                      No_of_days : "10",
                      Result : "Accepted"
                    }
  ]

  return (
    <div className='flex'>
        <SidebarComponent/>
        <div className='flex w-[100%] '>
          <div className='m-[3%] border gray-red-700 w-[100%] flex flex-col'>
            <h1 className='m-[20px] text-2xl text-center'>Leave History</h1>
            <div className='border gray-red-700'>
              <table class="w-full border border-gray-200">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Name</th>
                        <th class="border border-gray-300 px-4 py-2">Type of Leave</th>
                        <th class="border border-gray-300 px-4 py-2">No of Days</th>
                        <th class="border border-gray-300 px-4 py-2 w-[40%]">Accept/Forward/Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {Leaves.map((leave, leaveid)=>(
                      <tr className={leaveid % 2 === 0 ? 'bg-white' : 'bg-gray-100'} key={leaveid}>
                        <td class="border border-gray-300 px-4 py-2">{leave.Name}</td>
                        <td class="border border-gray-300 px-4 py-2">{leave.Type_of_Leave}</td>
                        <td class="border border-gray-300 px-4 py-2">{leave.No_of_days}</td>
                        <td class="border border-gray-300 px-4 py-2 flex justify-evenly">
                          {leave.Result}
                        </td>
                      </tr>
                    )
                    )}
                </tbody>
              </table>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default LeaveHistory