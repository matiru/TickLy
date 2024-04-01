import React from "react";
import './tickets.css'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";




export default function Tickets() {
    return(
        <div className="tickets_container">

<div className='tickets_header'>  
       <span>
       <NavLink to="" className="tickets_link"> <div className='tickets_div'> <p>tickets</p></div> </NavLink>
       <NavLink to="new ticket" className="tickets_link"> <div className='tickets_div'> <p>+ new ticket</p></div></NavLink>
        </span>
    
        </div>
        <div className='tickets_content'>
        <Outlet /> 
        </div>
            
        </div>
    )

}