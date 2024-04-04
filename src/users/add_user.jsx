import React from "react";
import { useState } from "react";
import './users.css'




export default function Add_User() {
    const roleOptions = ["customer","agent"];
    const categoryOptions = ["SoftwareDeveloper","NetworkEngineer","Systems_Engineer"];
    const [role, setRole] = useState(roleOptions[0]);
    const [category, setCategory] = useState(roleOptions[0])
const companyOptions = ["Tiruma Productions", "Play_boy  Mansion"];
console.log (roleOptions[1])
console.log(role)



    return (
        <div className="add_user_container">
            <form className="user_details_form">
                <div className="add_user_details">
                    <label className="user_detail_label" htmlFor="name">Name:</label>
                    <input className="user_detail_input"
                        type="text"
                        id="name"
                        required
                    />
                </div>
                <div className="add_user_details">
                    <label className="user_detail_label" htmlFor="email">Email:</label>
                    <input className="user_detail_input"
                        type="email"
                        id="email"
                        
                        required
                    />
                </div>
                <div className="add_user_details">
                    <label className="user_detail_label" htmlFor="phone">Phone:</label>
                    <input className="user_detail_input"
                        type="tel"
                        id="phone"
                      
                        required
                    />
                </div>
                <div className="add_user_details">
                    <label className="user_detail_label" htmlFor="company">Company:</label>
                    <select className="user_detail_input"
                        id="company"
                        
                        required
                    >
                        {companyOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="add_user_details">
                    <label className="user_detail_label" htmlFor="role">Role:</label>
                    <select className="user_detail_input"
                        id="role"
                        
                  onChange={(event) => setRole(event.target.value)}
                        
                        required
                    >
                        {roleOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {  role === roleOptions[1] ?
                <div className="add_user_details">
                    <label className="user_detail_label" htmlFor="role">Category:</label>

                    <select className="user_detail_input"
                        id="role"
                        
                        required
                    >

                        {categoryOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                :
                null }

{  role === roleOptions[1] ?
                <div className="add_user_details">
                    <label className="user_detail_label" htmlFor="role">Password:</label>

                    <input className="user_detail_input"
                        type="text"
                        id="name"
                        required
                        value= "pass123"
                    />
                </div>
                :
                null }

                <button className="user_details_button" type="submit">register</button>
            </form>
        </div>
    )
}