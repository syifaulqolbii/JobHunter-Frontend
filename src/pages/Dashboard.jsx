import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import KanbanTable from "../components/KanbanTable.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {getCountJob, getAppliedJob, getPendingJob} from "../modules/fetch/kanban/index.js";

const Dashboard = () => {
    const [countJob, setCountJob] = useState(0)
    const [countApplicant, setCountApplicant] = useState(0)
    const [countPending, setCountPending] = useState(0)


    useEffect(() => {
        getCountJob().then((res) => {
            setCountJob(res.data)
        })
        getAppliedJob().then((res) => {
            setCountApplicant(res.data)
        })
        getPendingJob().then((res) => {
            setCountPending(res.data)
        })
    }, [])

    return (
        <>
            <Navbar/>
            <Sidebar/>
            <div className="p-5 sm:p-10 sm:ml-64 mt-16 sm:mt-16">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-semibold font-poppins">Dashboard</h1>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-center gap-5 mt-10">
                    <div className="w-full p-5 bg-[#C6D984] hover:bg-[#014034] hover:text-white text-slate-900 rounded-xl">
                        <h1 className="text-3xl font-semibold font-poppins">{countJob}</h1>
                        <h2 className="text-sm font-medium font-poppins">Job List</h2>
                    </div>
                    <div className="w-full p-5 bg-[#F2CD5C] hover:bg-[#014034] hover:text-white text-slate-900 rounded-xl">
                        <h1 className="text-3xl font-semibold font-poppins">{countApplicant}</h1>
                        <h2 className="text-sm font-medium font-poppins">Applicant</h2>
                    </div>
                    <div className="w-full p-5 bg-[#F24C3D] hover:bg-[#014034] hover:text-white text-slate-900 rounded-xl">
                        <h1 className="text-3xl font-semibold font-poppins">{countPending}</h1>
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