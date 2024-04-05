import './App.css';
import LoginPage from './authentication_components/login.jsx';
import Sign_up_Page from './authentication_components/signup.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicklyMainPage from './tickly_main_component/tickly.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Tickets from './tickets/tickets.jsx';
import TicketsTable from './tickets/tickets_table.jsx';
import NewTicket from './tickets/new_ticket.jsx';
import Agents from './agents/agents.jsx';
import Agents_Cards from './agents/agents_cards.jsx';
import Add_User from './users/add_user.jsx';
import Companies from './companies/companies.jsx';
import NewCompany from './companies/new_company.jsx';
import CompaniesTable from './companies/companies_table.jsx';
import Clients from './clients/clients.jsx';
import ClientsTable from './clients/clients_table.jsx';
import Profile from './profile/profile.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path="/signup" element={<Sign_up_Page />} />
          <Route path="/tickly" element={<TicklyMainPage />}>

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="tickets" element={<Tickets />} >
              <Route index path="" element={<TicketsTable />} />
              <Route path="new ticket" element={<NewTicket />} />
            </Route>

            <Route path="companies" element={<Companies />} >
              <Route index path="" element={<CompaniesTable />} />
              <Route path="new company" element={<NewCompany />} />
            </Route>

            <Route path="profile" element={<Profile />} >
              <Route index path="" element={<Profile />} />

            </Route>

            <Route path="clients" element={<Clients />} >
              <Route index path="" element={<ClientsTable />} />
              <Route path="new client" element={<Add_User />} />
            </Route>


            <Route path="agents" element={<Agents />} >
              <Route index path="" element={<Agents_Cards />} />
              <Route path="new agent" element={<Add_User />} />
            </Route>

          </Route>






        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
