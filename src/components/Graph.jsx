
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import graph from "../data/graph"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Expense', 
      data: graph.map((month)=> month.scale),
    //   backgroundColor: 'gray',
      color:"blue",
      circular:true,
    //   borderColor:"red"
    },
  ],
};


const Graph = () => {
    return (
        <>
            <div className='mx-4 bg-white rounded-md p-2 mt-10 dark:bg-gray-800 dark:text-white duration-300'>
            <Bar options={options} data={data} />
            </div>
        </>
    )
}

export default Graph