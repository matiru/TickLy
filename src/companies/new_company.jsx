import React from "react"
import './companies.css'




export default function NewCompany() {
  


    return (
        <div className="add_company_container">
            <h2>Company Details</h2>
            <form className="company_details_form">
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="name"> Company Name:</label>
                    <input className="company_detail_input"
                        type="text"
                        id="name"
                        required
                    />
                </div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="phone">Location:</label>
                    <input className="company_detail_input"
                        type="tel"
                        id="phone"
                      
                        required
                    />
                </div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="phone">Location Pin:</label>
                    <input className="company_detail_input"
                        type="tel"
                        id="phone"
                      
                        required
                    />
                </div>
                <div></div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="name"> Company Owner:</label>
                    <input className="company_detail_input"
                        type="text"
                        id="name"
                        required
                    />
                </div>
                
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="email">Email:</label>
                    <input className="company_detail_input"
                        type="email"
                        id="email"
                        
                        required
                    />
                </div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="phone">Phone:</label>
                    <input className="company_detail_input"
                        type="tel"
                        id="phone"
                      
                        required
                    />
                </div>
                <div></div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="name"> Contact Person:</label>
                    <input className="company_detail_input"
                        type="text"
                        id="name"
                        required
                    />
                </div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="email">Email:</label>
                    <input className="company_detail_input"
                        type="email"
                        id="email"
                        
                        required
                    />
                </div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="phone">Phone:</label>
                    <input className="company_detail_input"
                        type="tel"
                        id="phone"
                      
                        required
                    />
                </div>
              
                
                <div className="add_company_details">
                <button className="company_details_button" type="submit">register</button>
                </div>
            </form>
        </div>
    )
}