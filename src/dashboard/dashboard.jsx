import React from "react"
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import './dashboard.css'
import { FaStar } from 'react-icons/fa'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, PieChart, Pie } from 'recharts';
import { Title } from "@mui/icons-material";


export default function Dashboard() {
    const data = [
        { name: 'monday', tickets: 12, target: 1000 },
        { name: 'tuesday', tickets: 14, target: 1200 },
        { name: 'wednesday', tickets: 30, target: 1040 },
        { name: 'thursday', tickets: 16, target: 1500 },
        { name: 'friday', tickets: 10, target: 1000 },
        { name: 'saturday', tickets: 24, target: 1000 },
        { name: 'sunday', tickets: 7, target: 1000 },
    ];



    const data2 = [
        { name: 'resolved', value: 800, fill: '#2E86AB' }, // Ocean Blue
        { name: 'unresolved', value: 300, fill: '#F4D35E' }, // Mustard Yellow
        { name: 'pending', value: 300, fill: '#6AB187' }, // Mint Greened
    ];



    return (
        <div className="dashboard_container">
        <span>
        <h1>Welcome back matiru</h1>
        </span>
          <div className="dashboard_header">
                
                <div className="dashboard_header_bar">

                    <div className="dashboard_header_item1"><ApartmentRoundedIcon fontSize="large" /><h2>Companies</h2></div>
                    <div className="dashboard_header_item1"><PeopleAltOutlinedIcon fontSize="large" /><h2>Clients</h2></div>
                    <div className="dashboard_header_item1"><ManageAccountsOutlinedIcon fontSize="large" /><h2>Profile</h2></div>
                    <div className="dashboard_header_item1"><ExitToAppOutlinedIcon fontSize="large" /><h2>Signout</h2></div>

                </div>

            </div>

            <div className="dashboard_body">
                <div className="dashboard_body_item1"><h2>My Open Tickets</h2>
                    <h1>12</h1></div>
                    <div ></div>
                <div className="dashboard_body_item1"><h2>My Pending Tickets</h2><h1 >01</h1></div>
                <div ></div>
                <div className="dashboard_body_item1"><h2>My Rating</h2><p><FaStar size={40} color="gold" /><FaStar size={40} color="gold" /><FaStar size={40} color="gold" /></p></div>
            </div>
            <div className="dashboard_footer">
                
            <div className="dashboard_footer_barchart">
            <h4>This week's tickets </h4>
                <BarChart width={500} height={430} data={data}>
                    {/* <Title dataKey = " This weeks tickets "/> */}

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={1400} stroke="red" label="Target" />
                    <Bar dataKey="tickets" fill="#00D0C7" />
                </BarChart>
            </div>
            

            <div className="dashboard_footer_piechart">
            <h4>Total tickets </h4>
                <PieChart width={500} height={430}>
                    <Pie data={data2} dataKey="value" nameKey="name"
                    />
                    <Tooltip />
                    <Legend />
                </PieChart>
                </div>
            </div>


        </div>

    )
}