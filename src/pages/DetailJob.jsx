import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { detailJob } from "../modules/fetch/job/index.js";
import { addKanban } from "../modules/fetch/kanban/index.js";

const DetailJob = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [kanban, setKanban] = useState([]);
  useEffect(() => {
    try {
      const fetchDetailJob = async () => {
        const response = await detailJob(id);
        const detailJobData = response.data;
        setDetail(detailJobData);
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
        alert("Success apply job");
      };
      fetchAddKanban();
    } catch (e) {
      console.log("Error applied job", e);
      alert("Failed apply job");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow">
              <div className="card-body">
                <h2>{detail.job_name}</h2>
                <p>{detail.description}</p>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailJob;
