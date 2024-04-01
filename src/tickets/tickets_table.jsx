


export default function TicketsTable(){
    

return(

    <div className="tickets_listing_container">
            <div className="search_bar_div">
                    <label>Search:</label>
                    <input type="text" className="search_ticket"  />
                  </div>
      <h2>Tickets Table</h2>
      <table className="ticket_table">
      <thead>
        <tr>
        <td className='tickets_table_header_cell'> <h4>Ticket ID</h4> </td>
           <td className='tickets_table_header_cell'> <h4>Date</h4></td>
           <td className='tickets_table_header_cell'> <h4>Client</h4></td>
           <td className='tickets_table_header_cell'> <h4>Agent</h4></td>  
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
                

            </tr>
            <tr>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                

            </tr>
            <tr>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                <td className="ticket_table_cell"><h4>Status</h4></td>
                

            </tr>
        </tbody>
      </table>
    </div>
)
}