import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'
import './agents.css'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';


export default function Agents_Cards() {

    const [status, setStatus] = useState('active')
    console.log(status)


    function handle_status() {
        console.log(status)
        if (status == 'active') {
            setStatus('inactive')
        }
        else if (status == 'inactive') {
            setStatus('active')
            console.log(status)
        }
        else { return }


    }
    return (
        <div className="agents_listing_container">
            <div className="agent_search_bar_div">
                <label>Search:</label>
                <input type="text" className="search_ticket" />
            </div>
            <div className="profile_card_container">
                <div className="agents_profile_card">
                    <span className="agents_profile_header">
                        <ModeEditOutlineOutlinedIcon className='agent_edit_button' />
                        <h3>Agent Profile</h3>
                        {
                            status === 'active' ? <ToggleOnOutlinedIcon className="agent_switch_on" onClick={handle_status} /> :
                                <ToggleOffOutlinedIcon className='agent_switch_off ' onClick={handle_status} />
                        }
                    </span>
                    <div className="agent_details_container">
                        <span>
                            <h3>Name:</h3>
                            <h3>Gem Matiru</h3>
                        </span>
                        <span>
                            <h3>Role:</h3>
                            <h3>Software Developer</h3>
                        </span>
                        <span>
                            <h3>Joined_At:</h3>
                            <h3>12/02/2024</h3>
                        </span>
                        <span>
                            <h3>Total Tickets:</h3>
                            <h3>126</h3>
                        </span>
                        <span>
                            <h3>Open Tickets:</h3>
                            <h3>23</h3>
                        </span>
                        <span>
                            <h3>Closed Tickets:</h3>
                            <h3>100</h3>
                        </span>
                        <span>
                            <h3>Pending Tickets:</h3>
                            <h3>3</h3>
                        </span>
                        <span>
                            <h3>Avrg Rating:</h3>
                            <h3><p><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /></p></h3>
                        </span>
                    </div>
                </div>

                <div className="agents_profile_card">
                    <span className="agents_profile_header">
                        <ModeEditOutlineOutlinedIcon className='agent_edit_button' />
                        <h3>Agent Profile</h3>
                        {
                            status == 'active' ? <ToggleOnOutlinedIcon className="agent_switch_on" onClick={handle_status} /> :
                                <ToggleOffOutlinedIcon className='agent_switch_off ' onClick={handle_status} />
                        }
                    </span>
                    <div className="agent_details_container">
                        <span>
                            <h3>Name:</h3>
                            <h3>Gem Matiru</h3>
                        </span>
                        <span>
                            <h3>Role:</h3>
                            <h3>Software Developer</h3>
                        </span>
                        <span>
                            <h3>Joined_At:</h3>
                            <h3>12/02/2024</h3>
                        </span>
                        <span>
                            <h3>Total Tickets:</h3>
                            <h3>126</h3>
                        </span>
                        <span>
                            <h3>Open Tickets:</h3>
                            <h3>23</h3>
                        </span>
                        <span>
                            <h3>Closed Tickets:</h3>
                            <h3>100</h3>
                        </span>
                        <span>
                            <h3>Pending Tickets:</h3>
                            <h3>3</h3>
                        </span>
                        <span>
                            <h3>Avrg Rating:</h3>
                            <h3><p><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /></p></h3>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}