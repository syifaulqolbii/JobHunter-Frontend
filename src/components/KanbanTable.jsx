import {useEffect, useState} from "react";
import {getAllKanbans} from "../modules/fetch/kanban";

const KanbanTable = () => {
    const [kanbans, setKanbans] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        try {
            const fetchKanbans = async () => {
                const response = await getAllKanbans()
                const kanbansData = response.data;
                setKanbans(kanbansData)
                setLoading(false)
            }
            fetchKanbans()
        } catch (e) {
            console.log("Error fetching kanbans", e)
        }
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
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                    Accepted
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</a>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </>
    )
}

export default KanbanTable