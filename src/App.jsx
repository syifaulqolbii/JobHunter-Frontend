import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from './pages/Homepage';

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/homepage"} element={<Homepage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
