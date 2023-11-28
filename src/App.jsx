import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from './components/privateRoute.jsx';
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import ErrorBoundary from "./components/ErrorBoundary";
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
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/"} element={<Homepage/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
