import React from 'react';
import DashboardChart from '../DashboardChart/DashboardChart';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-4xl p-10 font-bold'>Dashboard</h2>
            <DashboardChart></DashboardChart>
        </div>
    );
};

export default Dashboard;