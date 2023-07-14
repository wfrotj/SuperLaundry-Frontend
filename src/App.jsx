import { useEffect, useState } from "react";
import CustomerList from "./components/CustomerList";
import RegisterForm from "./components/RegisterForm";
import { Routes, Route } from "react-router-dom";
import customerService from "./services/customerService";
import Joblist from "./components/Joblist";
import Landing from "./components/Landing";

import SuperLaundry from "./pages/SuperLaundry";
import LoginForm from "./pages/LoginForm";
function App() {
  const [customers, setCustomers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedCustomer");

    if (loggedUserJSON) {
      const customer = JSON.parse(loggedUserJSON);
      setCustomer(customer);
      customerService.setToken(customer.token);
    }
  }, []);

  return (
    // <div>
    //   {customer === null ? (
    //     loginForm()
    //   ) : (
    //     <>
    //       <h2>Welcome back {customer.name}</h2>
    //       {/* <CustomerList customers={customers} setCustomers={setCustomers} />
    //       <RegisterForm customers={customers} setCustomers={setCustomers} /> */}
    //     </>
    //   )}

    //   {/* <LandingPage /> */}
    // </div>
    // <>
    //   {customer === null ? (
    //     loginForm()
    //   ) : (
    //     <>
    //       <h2>Welcome back {customer.name}</h2>
    //       <button onClick={handleLogout}>LOGOUT</button>
    //       {/* <Joblist jobs={jobs} setJobs={setJobs} /> */}
    //       <Landing />
    //     </>
    //   )}
    // </>
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <SuperLaundry customer={customer} setCustomer={setCustomer} />
          }
        />

        <Route
          path="/login/customer"
          element={
            <LoginForm
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              setCustomer={setCustomer}
              customer={customer}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
