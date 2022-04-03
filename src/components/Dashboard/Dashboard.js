import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [graphData, setGraphData] = useState([]);
    useEffect( ()=>{
        axios.get('data.json')
        .then(data => setGraphData(data.data))
    },[]);
    console.log(graphData)
    return (
        <div>
            <h1>I am dashboard</h1>
        </div>
    );
};

export default Dashboard;