import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


export default function CompaniesTable() {



    function handle_ticket_details() {
        console.log("ticket details")
    }

    return (

        <div className="tickets_listing_container">
            <div className="search_bar_div">
                <label>Search:</label>
                <input type="text" className="search_ticket" />
            </div>
            <h2>Companies Table</h2>
            <table className="ticket_table">
                <thead>
                    <tr >
                        <td className='tickets_table_header_cell'> <h4>Company ID</h4> </td>
                        <td className='tickets_table_header_cell'> <h4>Location</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Owner</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Contact Person</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Contact Person Email</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Open Tickets</h4></td>
                        <td className="tickets_table_header_cell"><h4>Closed Tickets</h4></td>
                        <td className='tickets_table_header_cell'> <h4>Edit Details</h4></td>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell">
                            <MoreVertOutlinedIcon className="table_ticket_details" /></td>



                    </tr>
                    <tr>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell">
                            <MoreVertOutlinedIcon className="table_ticket_details" /></td>


                    </tr>
                    <tr>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4>Status</h4></td>
                        <td className="ticket_table_cell"><h4 onClick={console.log('capenr')}>Status </h4></td>
                        <td className="ticket_table_cell">
                            <MoreVertOutlinedIcon className="table_ticket_details" /></td>



                    </tr>
                </tbody>
            </table>
        </div>
    )
}