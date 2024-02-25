import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend);

export default function Chart({arr=[],currency,days}: {arr: any[],currency:string,days:string}) {
console.log(arr);
const prices: number[] = [];
const date=[];
for (let i = 0; i < arr.length; i++) {
  if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
  else date.push(new Date(arr[i][0]).toLocaleDateString());
  prices.push(arr[i][1]);
}
const data = {
  labels: date,
  datasets: [
    {
      label: `Price in ${currency}`,
      data: prices,
      borderColor: "#30589c",
      backgroundColor: "#638bcf",
      pointRadius: 0,
      borderWidth: 1,
    },
  ],
};



  return <Line 
  options={{
    responsive:true,
  }}
data={data}
 />
}