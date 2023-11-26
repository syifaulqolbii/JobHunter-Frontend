import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from './components/privateRoute.jsx';
import Dashboard from "./pages/Dashboard";
import Homepage from './pages/Homepage';
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import Register from "./pages/Register";
import Navbar from "./components/Navbar.jsx";
import CreateJob from "./pages/CreateJob.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/CreateJob"} element={<CreateJob/>}/>
                    <Route path={"/dashboard"} element={<Dashboard/>}/>
                    <Route path={"/homepage"} element={<Homepage/>}/>
                    <Route path={"/edituser"} element={<EditProfile/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/"} element={<Homepage/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
