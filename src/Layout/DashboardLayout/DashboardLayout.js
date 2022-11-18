import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link>My Appointment</Link>
            </li>
            <li>
              <Link>All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
