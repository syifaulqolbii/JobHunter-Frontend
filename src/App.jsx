import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar";
import CreateJob from "./pages/CreateJob.jsx";
import Sidebar from "./components/Sidebar.jsx";



function App() {

  return (
    <>
        <Router>
          <Navbar />
          <Sidebar />
            <Routes>
                <Route path={"/CreateJob"} element={<CreateJob />}/>
                <Route path={"/dashboard"} element={<Dashboard />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
