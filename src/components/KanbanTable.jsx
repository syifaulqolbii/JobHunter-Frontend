import React, {useEffect, useState} from "react";
import {getAllKanbans, editStatusKanban} from "../modules/fetch/kanban";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const KanbanTable = () => {
    const [kanbans, setKanbans] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchKanbansData = async () => {
        try {
            const response = await getAllKanbans()
            const kanbansData = response.data;
            setKanbans(kanbansData)
            setLoading(false);
        } catch (e) {
            console.log("Error fetching kanbans", e);
        }
    }

    const updateKanbanStatus = async (kanbanId, newStatus) => {
        try {
            await editStatusKanban(kanbanId, newStatus)
            await fetchKanbansData()
            toast.success('Update Status Succesfully', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                autoClose: 3000
            });
        } catch (e) {
            console.log("Error fetching kanbans", e)
            toast.error('Error Update Status', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                autoClose: 5000
            });
        }
    }

    useEffect(() => {
        fetchKanbansData()
    }, [])


    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Job Applied
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {loading ? (
                    <tr className="animate-pulse">
                        <td className="px-6 py-4 bg-gray-200 dark:bg-gray-700" colSpan="4"></td>
                    </tr>
                ) : (
                    kanbans.map((kanban, index) => (
                        <tr key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {kanban.User.name}
                            </th>
                            <td className="px-6 py-4">
                                {kanban.Job.job_name}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    {kanban.status === 'applied' ? (
                                        <div className={`h-2.5 w-2.5 rounded-full bg-slate-600 me-2`}></div>
                                    ) : kanban.status === 'accepted' ? (
                                        <div className={`h-2.5 w-2.5 rounded-full bg-green-600 me-2`}></div>
                                    ) : kanban.status === 'rejected' ? (
                                        <div className={`h-2.5 w-2.5 rounded-full bg-red-600 me-2`}></div>
                                    ) : kanban.status === 'process' ? (
                                        <div className={`h-2.5 w-2.5 rounded-full bg-yellow-400 me-2`}></div>
                                    ) : null}
                                    {kanban.status}
                                </div>
                            </td>

                            <td className="px-6 py-4">
                                <button data-modal-target={`large-modal-${index}`}
                                        data-modal-toggle={`large-modal-${index}`}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail
                                </button>
                                <div id={`large-modal-${index}`} tabIndex="-1"
                                     className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">
                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div
                                                className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                    Detail Applicant
                                                </h3>
                                                <button type="button"
                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                        data-modal-hide={`large-modal-${index}`}>
                                                    <svg className="w-3 h-3" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 14 14">
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <div
                                                className="p-5 md:p-10 space-y-4 flex justify-center items-start gap-10">
                                                <img className="w-40 h-40 rounded-full"
                                                     src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                     alt="user photo"></img>
                                                <div className="flex-1">
                                                    <table
                                                        className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        <tbody>
                                                        <tr className="text-lg">
                                                            <th scope="row"
                                                                className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Job Applied
                                                            </th>
                                                            <td className="px-6 py-4 font-semibold">
                                                                {kanban.Job.job_name}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"
                                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Name
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {kanban.User.name}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"
                                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Email
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {kanban.User.email}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"
                                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Phone
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {kanban.User.phone}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"
                                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Address
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {kanban.User.address}
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div
                                                className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide={`large-modal-${index}`} type="button"
                                                        onClick={() => updateKanbanStatus(kanban.id, "accepted")}
                                                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Accepted
                                                </button>
                                                <button data-modal-hide={`large-modal-${index}`} type="button"
                                                        onClick={() => updateKanbanStatus(kanban.id, 'process')}
                                                        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Process
                                                </button>
                                                <button data-modal-hide={`large-modal-${index}`} type="button"
                                                        onClick={() => updateKanbanStatus(kanban.id, 'rejected')}
                                                        className="ms-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                                    Rejected
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
            <ToastContainer />
        </>
    )
}

export default KanbanTable