import axios from "axios";
import React, { useEffect, useState } from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import './Dashboard.css';
const Dashboard = () => {
  const [graphData, setGraphData] = useState([])
  useEffect( ()=>{
    axios.get('data.json')
    .then(data => setGraphData(data.data))
  },[])

  return (
    <div className='grid lg:grid-cols-2 gap-10 w-[80%] mt-10 mx-auto'>
        <div className="chart-box-style">
            <h1 className="text-2xl text-center mb-4">Month wise sell</h1>
            <MyLineChart data={graphData}></MyLineChart>
        </div>
        <div className="chart-box-style">
            <h1 className="text-2xl text-center mb-4">Investment VS Revenue</h1>
            <MyAreaChart data={graphData}></MyAreaChart>
        </div>
        <div className="chart-box-style">
        <h1 className="text-2xl text-center mb-4">Investment VS Revenue</h1>
            <MyBarChart data={graphData}></MyBarChart>
        </div>
        <div className="chart-box-style">
        <h1 className="text-2xl text-center">Investment VS Revenue</h1>
            <MyPieChart data={graphData}></MyPieChart>
        </div>
        
    </div>
  );
};

export default Dashboard;
