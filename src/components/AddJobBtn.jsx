import React from "react";
import { useState } from "react";
import AddJobModal from "../modals/AddJobModal";
import "../styles/landingPage.css";

function AddJobBtn({ purpose, customers, setCustomers }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? (
        <AddJobModal
          setShow={setShow}
          customers={customers}
          setCustomers={setCustomers}
        />
      ) : null}

      <button
        className="add-btn-monitoring add-placement-monitoring tw-w-[8em] tw-bg-[#59E0F2] tw-z-[1020]"
        onClick={() => setShow(true)}
      >
        {purpose}
      </button>
    </div>
  );
}

export default AddJobBtn;
