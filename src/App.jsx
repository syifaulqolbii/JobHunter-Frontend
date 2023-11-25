import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/edituser" element={<EditProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
