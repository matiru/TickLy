




export default function NewTicket(){
    

    return(
    < div className="create_ticket_container">
       < div className="create_ticket">
          <div className="create_ticket_header">
          <h3>create ticket 😃 </h3>
                </div>
         
           
            <form className="ticket_content">
            <div className="ticket_company">
              
              <h5>*Company:</h5>
              <select
                className="select_subject"
            
              >
                <option></option>
                <option value="SoftWare Problem">Matiru Enterprises</option>
                <option value="Access And Permission Grants">
                  Access And Permission Grants{" "}
                </option>
                <option value="Internet Problem">Tiruma Productions</option>
                
              </select>
            </div>
            <div className="ticket_client">
              
              <h5>*Client~Email:</h5>
              <input
                className="select_subject"
            
              >
                
                
              </input>
            </div>
            
          
              <div className="ticket_subject">
              
                <h5>*subject:</h5>
                <select
                  className="select_subject"
              
                >
                  <option></option>
                  <option value="SoftWare Problem">SoftWare Problem</option>
                  <option value="Access And Permission Grants">
                    Access And Permission Grants{" "}
                  </option>
                  <option value="Internet Problem">Internet Problem</option>
                  <option value="Hardware Failure">Hardware Failure</option>
                  <option value="Aquistion/Setting Up Of New Equipment">
                    Aquistion/Setting Up Of New Equipment
                  </option>
                  <option value="Staff Induction And Training">
                    Staff Induction And Training
                  </option>
                  <option value="General Consultation">
                    General Consultation
                  </option>
                  <option value="Licences Renewal and Activation">
                    Licences Renewal and Activation
                  </option>
                  <option value="Files Backup">Files Backup</option>
                  <option selected value="Service and Maintenance of Equipment">
                    Service and Maintenance of Equipment
                  </option>
                  <option value="Website Overhaul">Website Overhaul</option>
                </select>
              </div>
             
              <div className="ticket_description">
                <h5>*description: </h5>
                <textarea
                  className="ticket_description_text_area"
                  type="text"
        
                ></textarea>
              </div>
             
              
              <div className="ticket_buttons">
                <button
                  type="submit"
                  
                  className="submit_button"
                >
                  submit
                </button>

                <button  className="submit_button">
                  cancel
                </button>
              </div>
            </form>
          
          </div>
          </div>
    )
}