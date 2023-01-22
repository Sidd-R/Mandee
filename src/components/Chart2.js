import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "../styles/charts.css";

const PieChart = ({usum,ssum}) => {
  console.log(usum,ssum,"llll");
  const labels = ["Uploaded", "Sold"];
const upload=20;
const sold=10;
const data = {

  labels: labels,
  datasets: [
    {
      label: "Uploads and Sales Currently",
      backgroundColor: ["rgb(65, 201, 69)","rgb(154, 250, 125)"],
        borderColor: "rgb(255, 99, 132)",
      data: [usum, ssum], //get number of uploads and number of sales from variables from props 
      //add a column in database where sales is counted and uploads are counted
      //or run a query to check where the quantity is zero and quantity is not zero for uploads
    },
  ],
};
  return (
    <div className="chart">
      <Pie data={data} />
    </div>
  );
};
export default PieChart;