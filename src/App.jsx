import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import JobEdit from "./pages/JobEdit";
import Navbar from "./components/Navbar";
import CreateJob from "./pages/CreateJob.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path={"/CreateJob"} element={<CreateJob />}/>
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/editjob/:id"} element={<JobEdit />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
