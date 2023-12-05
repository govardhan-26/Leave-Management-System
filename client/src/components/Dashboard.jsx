import React from 'react'
import SidebarComponent from './SidebarComponent'
import { Chart } from 'react-google-charts';
import { useEffect } from 'react';

const Dashboard = () => {
  const init_leaves = "12 per year";
  const leaves_requested = "15";
  const leaves_granted = "8";
  const leaves_rejected = "6";
  const pending_requests = "1"

  const data = [
    ["Leaves", "Number of leaves"],
    // ["Leaves Requested", 15],
    ["Leaves Got Granted", 8],
    ["Leaves Got Rejected", 6],
    ["Leaves pending", 1],
  ];

  // const data = [
  //   ["Task", "Hours per Day"],
  //   ["Work", 11],
  //   ["Eat", 2],
  //   ["Commute", 2],
  //   ["Watch TV", 2],
  //   ["Sleep", 7],
  // ];

  const options = {
    title: "Leaves Details",
    is3D: true,
  };

  return (
    <div className='flex'>
        <SidebarComponent/>
        <div className='flex p-[3%] w-[100%]'>
          <div className='flex m-[3%] border border-black-500 w-[100%] p-[3%] justify-evenly'>
             <div className='flex flex-col text-center items-center pt-[10%] leading-8 w-[40%] border border-black-500'>
                <p>Initial Leaves : {init_leaves}</p>
                <p>No of Leaves Requested : {leaves_requested}</p>
                <p>No of Leaves Got Granted : {leaves_granted}</p>
                <p>No of Leaves Got Rejected : {leaves_rejected}</p>
                <p>Leaves Requested Pending : {pending_requests}</p>
             </div>
             <div className='border border-black-700 w-[60%]'>
                <Chart
                    chartType="PieChart"
                    options={options}
                    data={data}
                    width={"90%"}
                    height={"400px"}
                  />
             </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard