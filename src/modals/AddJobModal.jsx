import React, { useState } from "react";
import jobService from "../services/jobService";

function AddJobModal({ setShow, customers, customer }) {
  const [jobs, setJobs] = useState([]);
  const [sameAddress, setSameAddress] = useState(false);
  const [newAddressLine1, setNewAddressLine1] = useState("");
  const [newAddressLine2, setNewAddressLine2] = useState("");
  const [newAddressLine3, setNewAddressLine3] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleJobSubmit = (e) => {
    e.preventDefault();

    const jobObject = {
      addressLine1: newAddressLine1,
      addressLine2: newAddressLine2,
      addressLine3: newAddressLine3,
      remarks: remarks,
    };
    jobService.createJob(jobObject).then((returnedJob) => {
      // jobService.setToken(res.token);
      setJobs(jobs.concat(returnedJob));
      setRemarks("");
      setNewAddressLine1("");
      setNewAddressLine2("");
      setNewAddressLine3("");
    });
  };

  const handleSameAddressChange = (e) => {
    setSameAddress(e.target.checked);

    if (e.target.checked) {
      setNewAddressLine1(customer.address.line1 || "");
      setNewAddressLine2(customer.address.line2 || "");
      setNewAddressLine3(customer.address.line3 || "");
    } else {
      setNewAddressLine1("");
      setNewAddressLine2("");
      setNewAddressLine3("");
    }
  };

  return (
    <form onSubmit={handleJobSubmit}>
      <h2>Address</h2>
      <div>
        <label>Same address</label>
        <input
          type="checkbox"
          checked={sameAddress}
          onChange={handleSameAddressChange}
        />
      </div>
      <div>
        <input
          type="text"
          value={newAddressLine1}
          onChange={(e) => setNewAddressLine1(e.target.value)}
          disabled={sameAddress}
        />
      </div>
      <div>
        <input
          type="text"
          value={newAddressLine2}
          onChange={(e) => setNewAddressLine2(e.target.value)}
          disabled={sameAddress}
        />
      </div>
      <div>
        <input
          type="text"
          value={newAddressLine3}
          onChange={(e) => setNewAddressLine3(e.target.value)}
          disabled={sameAddress}
        />
      </div>
      <div>
        <input
          type="text"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => setShow(null)}>NO</button>
        <button type="submit">YES</button>
      </div>
    </form>
  );
}

export default AddJobModal;
