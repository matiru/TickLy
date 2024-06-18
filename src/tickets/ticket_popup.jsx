import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { FaStar } from 'react-icons/fa'



export default function Modal({ id, onClose }) {



    return (
        <div id={id || 'Modal'} className="ticket_modal">
            <div className="ticket_modal_content">
                <div className="ticket_modal_content_header">
                    <p>Ticket Details</p>
                    <span onClick={onClose} className="ticket_close_modal_icon"> &times;</span>

                </div>
                <div className="ticket_modal_content_body">

                    <div className="ticket_modal_content_ticket_chat">
                        <div className="ticket_modal_content_ticket_chat_sd">
                            <div className="ticket_subject">

                                <h5>*subject:</h5>
                                <label
                                    className="select_subject"
                                >
                                    Access And Permission Grants
                                </label>

                               
                            </div>
                            <div className="ticket_subject">

                                
                                <h5>*Category:</h5>
                                <label
                                    className="select_subject"
                                >Software
                                </label>
                            </div>

                            <div className="ticket_description">
                                <h5>*description: </h5>
                                <textarea
                                    className="ticket_description_text_area"
                                    type="text"

                                ></textarea>
                            </div>
                        </div>

                        <div className='chat_body'>
                            <p>
                                <span className="chat_name"> <p>gem</p></span>
                                <span className="chat_message">
                                    <p> lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed </p>
                                </span>
                                <span className="chat_timestamp">
                                    <p> 12/02/21 12:44pm</p>
                                </span>
                            </p>

                            <p>
                                <span className="chat_name"> <p>gem</p></span>
                                <span className="chat_message">
                                    <p> lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed </p>
                                </span>
                                <span className="chat_timestamp">
                                    <p> 12/02/21 12:44pm</p>
                                </span>
                            </p>
                            <p>
                                <span className="chat_name"> <p>gem</p></span>
                                <span className="chat_message">
                                    <p> lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed </p>
                                </span>
                                <span className="chat_timestamp">
                                    <p> 12/02/21 12:44pm</p>
                                </span>
                            </p>
                            <p>
                                <span className="chat_name"> <p>gem</p></span>
                                <span className="chat_message">
                                    <p> lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed lwqedqed </p>
                                </span>
                                <span className="chat_timestamp">
                                    <p> 12/02/21 12:44pm</p>
                                </span>
                            </p>

                        </div>
                    </div>

                    <div className="ticket_modal_content_edit_ticket">


                        <p>Edit Ticket Details</p>
                        <span><p>Ticket ID</p><label>
                            2AW13</label></span>


                        <span><p>Client Email</p><select>
                            <option>Open</option>
                            <option>Resolved</option>
                            <option>Pending</option>
                            <option>Closed</option>
                        </select></span>
                        <span><p>Agent</p><select>
                            <option>Open</option>
                            <option>Resolved</option>
                            <option>Pending</option>
                            <option>Closed</option>
                        </select></span>
                        <span><p>Status</p><select>
                            <option>Open</option>
                            <option>Resolved</option>
                            <option>Pending</option>
                            <option>Closed</option>
                        </select></span>
                        <span><p>Rate</p>
                            <p><FaStar className='ticket_rate' size={30} color="gold" /><FaStar size={30} color="gold" /><FaStar size={30} color="gold" /><FaStar size={30} color="gold" /><FaStar size={30} color="gold" /></p>
                        </span>
                        <button>update</button>



                    </div>


                </div>
                <div className="ticket_modal_content_footer">
                    <div className="ticket_modal_content_ticket_chat_input">
                        <form>
                            <input
                                //   value={input}
                                //   onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message"
                                type="text"
                                className="ticket_modal_chat_input"
                            />

                            <SendOutlinedIcon className="ticket_modal_chat_submit" type="submit" onClick={onClose} />
                        </form>
                    </div>
                    <div className="ticket_modal_content_edit_ticket_foot">


                    </div>
                </div>


            </div>


        </div>
    );

}