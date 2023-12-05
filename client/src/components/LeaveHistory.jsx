import React from 'react'
import SidebarComponent from './SidebarComponent'

const LeaveHistory = () => {

  const Leaves = [
                    { 
                      Type_of_Leave : "Sick",
                      No_of_days : "10",
                      Result : "Rejected",
                      From : "01 June 2023",
                      To : "10 June 2023"
                    },
                    {
                      Type_of_Leave : "Piligrimage",
                      No_of_days : "10",
                      Result : "Accepted",
                      From : "01 June 2023",
                      To : "10 June 2023"
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
                        <th class="border border-gray-300 px-4 py-2">Type of Leave</th>
                        <th class="border border-gray-300 px-4 py-2">From</th>
                        <th class="border border-gray-300 px-4 py-2">To</th>
                        <th class="border border-gray-300 px-4 py-2">No of Days</th>
                        <th class="border border-gray-300 px-4 py-2 w-[40%]">Accepted/Pending/Rejected</th>
                    </tr>
                </thead>
                <tbody>
                    {Leaves.map((leave, leaveid)=>(
                      <tr className={leaveid % 2 === 0 ? 'bg-white' : 'bg-gray-100'} key={leaveid}>
                        <td class="border border-gray-300 px-4 py-2">{leave.Type_of_Leave}</td>
                        <td class="border border-gray-300 px-4 py-2">{leave.From}</td>
                        <td class="border border-gray-300 px-4 py-2">{leave.To}</td>
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