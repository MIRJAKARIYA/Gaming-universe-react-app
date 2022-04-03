import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyAreaChart = ({data}) => {
  return (
    <div>
      <AreaChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#8884d8"
          fill="#4700D8"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#82ca9d"
          fill="#247881"
        />
      </AreaChart>
    </div>
  );
};

export default MyAreaChart;
