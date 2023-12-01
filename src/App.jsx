import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from './components/privateRoute.jsx';
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import ErrorBoundary from "./components/ErrorBoundary";
import CreateJob from "./pages/CreateJob.jsx";
import ListJob from "./pages/ListJob.jsx";
import JobEdit from "./pages/JobEdit";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/CreateJob"} element={<CreateJob/>}/>
                    <Route path={"/dashboard"} element={<Dashboard/>}/>
                    <Route path={"/homepage"} element={<Homepage/>}/>
                    <Route
                      path="/edituser"
                      element={
                        <ErrorBoundary>
                          <EditProfile />
                        </ErrorBoundary>
                      }
                    />
                    <Route path={"/editjob/:id"} element={<JobEdit />} />
                    <Route path={"/joblist"} element={<ListJob />} />
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/"} element={<Homepage/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
