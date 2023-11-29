import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import EditJob from "../components/EditJob.jsx";

const JobEdit = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>

            <div className="p-5 sm:p-10 sm:ml-64">
                <EditJob/>
            </div>
        </>
    )
}

export default JobEdit