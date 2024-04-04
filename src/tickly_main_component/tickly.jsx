import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import './tickly.css'







export default function TicklyMainPage(){

    return(
        <div className="main_page">
            <div className="main_page_content">
                <Sidebar/>

                <Outlet/>

            </div>
        </div>
    )
}