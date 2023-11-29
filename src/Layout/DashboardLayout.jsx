import React from 'react';
import Header from '../Pages/Shared/Header';
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-14 bg-[#F1F5F9]">
                    {/* Page content here */}
                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><a>Sidebar Item 2</a></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;