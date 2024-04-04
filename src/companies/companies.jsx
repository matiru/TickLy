import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";




export default function Companies() {
    return(
        <div className="tickets_container">

<div className='tickets_header'>  
       <span>
       <NavLink to="" className="tickets_link"> <div className='tickets_div'> <p>Companies</p></div> </NavLink>
       <NavLink to="new company" className="tickets_link"> <div className='tickets_div'> <p>+ new company</p></div></NavLink>
        </span>
    
        </div>
        <div className='tickets_content'>
        <Outlet /> 
        </div>
            
        </div>
    )

}