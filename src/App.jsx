import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import JobEdit from "./pages/JobEdit";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/editjob/:id"} element={<JobEdit />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
