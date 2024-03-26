import React from "react"
import "./sidebar.css"
import { NavLink } from "react-router-dom"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import small_logo from "../resources/logo5.png";

export default function Sidebar() {


    return (
        <div className="sidebar">
            <div className="sidebar_logo">
                <img src= {small_logo} width={"100px"} height={"80px"}></img>
                <h1>TickLy</h1>
            </div>


            <div className="sidebar_content">
                <NavLink to='dashboard' className="sidebar_link">
                    <DashboardOutlinedIcon className="dashboard_icon" />
                    <p>Dashboard</p>
                </NavLink>
            </div>
            <div className="sidebar_content">
                <NavLink to='tickets' className="sidebar_link">
                    <ConfirmationNumberOutlinedIcon className="dashboard_icon" />
                    <p>Tickets</p>
                </NavLink>
            </div>
            <div className="sidebar_content">
                <NavLink to='agents' className="sidebar_link">
                    <SupportAgentOutlinedIcon className="dashboard_icon" />
                    <p>Agents</p>
                </NavLink>
            </div>
            <div className="sidebar_content">
                <NavLink to='reports' className="sidebar_link">
                    <AssessmentOutlinedIcon className="dashboard_icon" />
                    <p>Reports</p>
                </NavLink>
            </div>




        </div>
    )
}