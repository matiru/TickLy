import { Password } from "@mui/icons-material"
import React from "react"




export default function Profile() {



    return (
        <div className="add_company_container">
            <h2>Profile Details</h2>
            <form className="company_details_form">
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="name"> Username:</label>
                    <input className="company_detail_input"
                        type="text"
                        id="name"
                        required
                        value="Matiru"
                    />
                </div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="phone">Company:</label>

                    <label className="company_detail_input" htmlFor="phone">Tiruma Productions</label>

                </div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="phone">Role:</label>

                    <label className="company_detail_input" htmlFor="phone">Client</label>

                </div>
                <div></div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="name"> User email:</label>
                    <input className="company_detail_input"
                        type="text"
                        id="name"
                        required
                        value="matiru@gmail.com"
                    />
                </div>

                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="email">Password:</label>
                    <input className="company_detail_input"
                        type="password"
                        id="email"
                        value={Password}

                        required
                    />
                </div>
                <div className="add_company_details">
                    <label className="company_detail_label" htmlFor="phone">Phone:</label>
                    <input className="company_detail_input"
                        type="text"
                        id="phone"
                        value="0711402766"
                        required
                    />
                </div>




                <div className="add_company_details">
                    <button className="company_details_button" type="submit">edit</button>
                </div>
            </form>
        </div>
    )
}