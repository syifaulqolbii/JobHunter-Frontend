import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { detailJob } from "../modules/fetch/job/index.js";
import { addKanban } from "../modules/fetch/kanban/index.js";
import Header from "../components/Header.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailJob = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [kanban, setKanban] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    try {
      const fetchDetailJob = async () => {
        const response = await detailJob(id);
        const detailJobData = response.data;
        const dataUser = response.data.User;
        setDetail(detailJobData);
        setUser(dataUser);
      };
      fetchDetailJob();
    } catch (e) {
      console.log("Error fetching detail job", e);
    }
  }, []);

  const handleSubmit = () => {
    try {
      const fetchAddKanban = async () => {
        const response = await addKanban(id);
        const kanbanData = response.data;
        setKanban(kanbanData);
        toast.success("Applied Job Succesfully", {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
          autoClose: 3000,
        });
      };
      fetchAddKanban();
    } catch (e) {
      console.log("Error applied job", e);
      toast.error("Applied Job Failed", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-blue-100 text-2xl py-4 text-center font-semibold text-slate-900 ">
        <span>{detail.job_name}</span>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-700 text-white py-2 px-3 rounded-lg" onClick={handleSubmit}>
          Apply This Job
        </button>
      </div>
      <div className="container mx-auto mt-28">
        <h2 className="font-semibold">
          Type : <span className="font-normal">{detail.type}</span>
        </h2>
        <h2 className="font-semibold">
          Category : <span className="font-normal">{detail.category}</span>
        </h2>
        <h2 className="font-semibold">
          Required Skill : <span className="font-normal">{detail.required_skill}</span>
        </h2>
        <h2 className="font-semibold">
          Salary : <span className="font-normal">{detail.salary}</span>
        </h2>
      </div>

      <div className="container mx-auto mt-16">
        <h2 className="font-bold text-2xl">Job Description</h2>
        <p className="font-normal text-slate-600 mt-4">{detail.description}</p>
      </div>

      <div className="container mx-auto mt-16">
        <h2 className="font-bold text-2xl">Company Info</h2>
        <div className="mt-4 flex">
          <img src="https://via.placeholder.com/150" alt="Job Image" className="mr-6 rounded-md" />
          <div className="flex flex-col">
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.address}</h2>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default DetailJob;
