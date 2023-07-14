import React, { useEffect } from "react";
import Landing from "../components/Landing";
import { useNavigate } from "react-router-dom";

function SuperLaundry({ customer, setCustomer }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!customer) navigate("/login/customer");
  }, [customer, navigate]);
  const handleLogout = () => {
    window.localStorage.removeItem("loggedCustomer");
    setCustomer(null);
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center mt-8 gap-8">
        {" "}
        <h1 className="text-4xl">Super Laundry</h1>
        <h2>Welcome back {customer?.name}</h2>
        <div>
          <Landing />
        </div>
      </div>
      <button onClick={handleLogout} className="flex items-end">
        LOGOUT
      </button>
    </div>
  );
}

export default SuperLaundry;
