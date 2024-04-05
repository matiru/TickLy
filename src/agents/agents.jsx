import React from "react";

import './agents.css'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Agents() {
    return (

        <div className="agents_container">

            <div className='agents_header'>
                <span>
                    <NavLink to="" className="agents_link"> <div className='agents_div'> <p>agents</p></div> </NavLink>
                    <NavLink to="new agent" className="agents_link"> <div className='agents_div'> <p>+ new agent</p></div></NavLink>
                </span>

            </div>
            <div className='agents_content'>
                <Outlet />
            </div>

        </div>
    )
}