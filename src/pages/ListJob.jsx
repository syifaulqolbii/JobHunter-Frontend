import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import JobList from "../components/JobList.jsx";

const ListJob = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>

            <div className="p-5 sm:p-10 sm:ml-64">
                <JobList/>
            </div>
        </>
    )
}

export default ListJob