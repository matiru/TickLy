
import Modal from "./ticket_popup";
import { useState } from 'react';
import './ticket_modal.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';




export default function TicketsTable() {


    const [showModalPopup, setShowModalPopup] = useState(false);


    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);

    }

    function onClose() {
        setShowModalPopup(false);

    }

    function handle_ticket_details() {
        console.log("ticket details")
    }

    return (

        <div className="tickets_listing_container">
            <div className="search_bar_div">
                <label>Search:</label>
                <input type="text" className="search_ticket" />
            </div>
            <h2>Tickets Table</h2>
            <table className="ticket_table">
                <thead>
                    <tr >
                        <td className='tickets_table_header_cell'> <h4>Ticket ID</h4> </td>
                        <td className='tickets_table_header_cell'> <h4>Date</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Subject</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Client</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Agent</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Status</h4></td>
                        <td className="tickets_table_header_cell"><h4>Details</h4></td>
                    </tr>
                </thead>

                <tbody>
                    <tr>

                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Licences Renewal and Activation</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell">
                            <MoreVertOutlinedIcon className="table_ticket_details" onClick={handleToggleModalPopup} /></td>


                    </tr>
                    {
                        showModalPopup && <Modal onClose={onClose}
                            id={'custom-id'}



                        />
                    }
                    <tr>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Licences Renewal and Activation</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"> <MoreVertOutlinedIcon className="table_ticket_details" onClick={handleToggleModalPopup} /></td>


                    </tr>
                    <tr>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Licences Renewal and Activation</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>

                        <td className="ticket_table_cell"><h4 onClick={console.log('capenr')}>Status </h4></td>
                        <td className="ticket_table_cell"> <MoreVertOutlinedIcon className="table_ticket_details" onClick={handleToggleModalPopup} /></td>



                    </tr>
                </tbody>
            </table>
        </div>
    )
}