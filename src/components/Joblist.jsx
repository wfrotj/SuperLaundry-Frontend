import React, { useEffect } from "react";
import jobService from "../services/jobService";
import AddJobBtn from "./AddJobBtn";

function Joblist({ jobs, setJobs }) {
  useEffect(() => {
    jobService.getJob().then((res) => {
      setJobs(res);
    });
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>DATE</td>
            <td>TIME</td>
            <td>WEIGHT</td>
            <td>AMOUNT</td>
            <td>STATUS</td>
          </tr>

          {jobs.map((job) => {
            return (
              <tr key={job.id}>
                <td>{job.dateCreated}</td>
                <td>{job.time}</td>
                <td>{job.weight}</td>
                <td>{job.amount}</td>
                <td>{job.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Joblist;
