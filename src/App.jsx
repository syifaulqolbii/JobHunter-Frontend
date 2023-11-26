import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from '@/components/PrivateRoute';
import Dashboard from "./pages/Dashboard";
import Homepage from './pages/Homepage';
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {

  return (
    <>
        <Router>
          
            <Routes>
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/homepage"} element={<Homepage/>} />
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/register"} element={<Register/>} />
                {/* <Route path='/' element={<PrivateRoute/>}>
                  <Route path='/dashboard' element={<Dashboard/>}/>
                </Route> */}
                <Route path={"/"} element={
                  <PrivateRoute>
                    <Dashboard/>
                  </PrivateRoute>
                }/>
                {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
                <Route path={"/homepage"} element={
                  <PrivateRoute>
                    <Homepage/>
                  </PrivateRoute>
                }/>            
            </Routes>
        </Router>
    </>
  )
}

export default App
