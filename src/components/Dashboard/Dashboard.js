import axios from "axios";
import React, { useEffect, useState } from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";
const Dashboard = () => {
  const [graphData, setGraphData] = useState([])
  useEffect( ()=>{
    axios.get('data.json')
    .then(data => setGraphData(data.data))
  },[])

  return (
    <div className='grid md:grid-cols-2 gap-10 w-[80%] mx-auto'>
        <div className="border-2 border-red-700">
            <h1 className="text-2xl text-center mb-4">Month wise sell</h1>
            <MyLineChart data={graphData}></MyLineChart>
        </div>
        <div className="border-2 border-red-700">
            <h1 className="text-2xl text-center mb-4">Invesment VS Revenue</h1>
            <MyAreaChart data={graphData}></MyAreaChart>
        </div>
        <div className="border-2 border-red-700">
            <MyBarChart data={graphData}></MyBarChart>
        </div>
        <div className="border-2 border-red-700">
            
            <MyPieChart data={graphData}></MyPieChart>
        </div>
        
    </div>
  );
};

export default Dashboard;
