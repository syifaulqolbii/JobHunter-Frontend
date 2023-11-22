import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import KanbanTable from "../components/KanbanTable.jsx";

const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <div className="p-5 sm:p-10 sm:ml-64 mt-16 sm:mt-16">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-semibold font-poppins">Dashboard</h1>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-center gap-5 mt-10">
                    <div className="w-full p-5 bg-[#C6D984] hover:bg-[#014034] text-white rounded-xl">
                        <h1 className="text-2xl font-semibold font-poppins">99</h1>
                        <h2 className="text-sm font-medium font-poppins">Job List</h2>
                    </div>
                    <div className="w-full p-5 bg-[#F2CD5C] hover:bg-[#014034] text-white rounded-xl">
                        <h1 className="text-2xl font-semibold font-poppins">10</h1>
                        <h2 className="text-sm font-medium font-poppins">Applicant</h2>
                    </div>
                    <div className="w-full p-5 bg-[#F24C3D] hover:bg-[#014034] text-white rounded-xl">
                        <h1 className="text-2xl font-semibold font-poppins">3</h1>
                        <h2 className="text-sm font-medium font-poppins">Applicant Pending</h2>
                    </div>
                </div>
            </div>

            <div className="p-5 sm:p-10 sm:ml-64">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-lg font-semibold font-poppins">Application Pending</h1>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <KanbanTable/>
                </div>
            </div>
        </>
    )
}

export default Dashboard