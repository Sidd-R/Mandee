// ./components/PieChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../styles/charts.css"

const saletoday=1000;
//take revenue from props (present in database)
//only for exisisting users, for new users , old data =0
const BarChart = ({revenue}) => {
  const labels = ["5dago", "4d ago", "3d ago", "1d ago", "Today"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revenue Earned",
        backgroundColor: "rgb(65, 201, 69)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 0, 0, 0, revenue],
      },
    ],
  };
  return (
    <div className="chart1">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;