import './App.css';
import LoginPage from './authentication_components/login.jsx';
import Sign_up_Page from './authentication_components/signup.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicklyMainPage from './tickly_main_component/tickly.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path={"/"} element={<LoginPage />} />
    <Route path="/signup" element={<Sign_up_Page />}/>
    <Route path="/tickly" element={<TicklyMainPage />}>

    {/* <Route path="dashboard" element={<DashBoard />} /> */}

    </Route>
    


   

      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
