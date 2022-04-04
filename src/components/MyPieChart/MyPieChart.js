import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const MyPieChart = ({data}) => {
  return (
      <PieChart width={400} height={300} className="mx-auto">
          <Tooltip />
        <Pie
          data={data}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#370665"
        />
        <Pie
          data={data}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#35589A"
          label
        />
      </PieChart>
  );
};

export default MyPieChart;
