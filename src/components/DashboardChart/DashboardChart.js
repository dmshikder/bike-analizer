import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import './DashboardChart.css';

const DashboardChart = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])
      
    return (
        <div className='dashboard-chart grid grid-cols-2 justify-center '>

      <div >  <AreaChart
          width={500}
          height={400}
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
          <Area type="monotone" dataKey="investment" stroke="#00FFAB" fill="#F47C7C" />
          <Area type="monotone" dataKey="revenue" stroke="#00FFAB" fill="#00FFAB" />
        </AreaChart>
        <p>XAxis: investment</p></div>


      <div>  <BarChart
          width={500}
          height={400}
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
          <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
          <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
          
          
        </BarChart></div>

        </div>
    );
};

export default DashboardChart;