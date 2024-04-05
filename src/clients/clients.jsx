import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";




export default function Clients() {
    return (
        <div className="tickets_container">

            <div className='tickets_header'>
                <span>
                    <NavLink to="" className="tickets_link"> <div className='tickets_div'> <p>clients</p></div> </NavLink>
                    <NavLink to="new client" className="tickets_link"> <div className='tickets_div'> <p>+ new client</p></div></NavLink>
                </span>

            </div>
            <div className='tickets_content'>
                <Outlet />
            </div>

        </div>
    )

}