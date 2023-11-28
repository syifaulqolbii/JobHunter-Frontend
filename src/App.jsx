import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/edituser"
            element={
              <ErrorBoundary>
                <EditProfile />
              </ErrorBoundary>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
