import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const MyBarChart = ({data}) => {
  return (
    <div>
       <h1 className="text-2xl ml-5 mb-10">Invesment VS Revenue</h1>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#4700D8" />
        <Bar dataKey="revenue" stackId="a" fill="#9900F0" />
      </BarChart>
    </div>
  );
};

export default MyBarChart;
