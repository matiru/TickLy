
import { FaStar } from 'react-icons/fa'

import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import { useState } from 'react';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function ClientsTable() {



    function handle_ticket_details() {
        console.log("ticket details")
    }
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

        <div className="tickets_listing_container">
            <div className="search_bar_div">
                <label>Search:</label>
                <input type="text" className="search_ticket" />
            </div>
            <h2>Clients Table</h2>
            <table className="ticket_table">
                <thead>
                    <tr >
                        <td className='tickets_table_header_cell'> <h4>Client ID</h4> </td>
                        <td className='tickets_table_header_cell'> <h4>Name</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Company</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Email</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Total Tickets</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Avrg_Rating</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Edit Details</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Status</h4></td>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4><p><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /></p></h4></td>
                        <td className="ticket_table_cell">
                            <MoreVertOutlinedIcon className="table_ticket_details" /></td>

                        <td className="ticket_table_cell">{
                            status === 'active' ? <ToggleOnOutlinedIcon className="agent_switch_on" onClick={handle_status} /> :
                                <ToggleOffOutlinedIcon className='agent_switch_off ' onClick={handle_status} />
                        }</td>

                    </tr>
                    <tr>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4><p><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /></p></h4></td>

                        <td className="ticket_table_cell">
                            <MoreVertOutlinedIcon className="table_ticket_details" /></td>

                        <td className="ticket_table_cell">{
                            status === 'active' ? <ToggleOnOutlinedIcon className="agent_switch_on" onClick={handle_status} /> :
                                <ToggleOffOutlinedIcon className='agent_switch_off ' onClick={handle_status} />
                        }</td>

                    </tr>
                    <tr onClick={console.log('capenr')}>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>

                        <td className="ticket_table_cell"><h4 >Status </h4></td>
                        <td className="ticket_table_cell"><h4><p><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /><FaStar size={15} color="gold" /></p></h4></td>

                        <td className="ticket_table_cell">
                            <MoreVertOutlinedIcon className="table_ticket_details" /></td>

                        <td className="ticket_table_cell">{
                            status === 'active' ? <ToggleOnOutlinedIcon className="agent_switch_on" onClick={handle_status} /> :
                                <ToggleOffOutlinedIcon className='agent_switch_off ' onClick={handle_status} />
                        }</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}