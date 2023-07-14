import React, { useState } from "react";
import customerService from "../services/customerService";
import { Link } from "react-router-dom";

function RegisterForm({ customers, setCustomers }) {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newContactNumber, setNewContactNumber] = useState("");
  const [newAddressLine1, setNewAddressLine1] = useState("");
  const [newAddressLine2, setNewAddressLine2] = useState("");
  const [newAddressLine3, setNewAddressLine3] = useState("");

  const registerCustomer = (e) => {
    e.preventDefault();

    const customerObject = {
      firstName: newFirstName,
      lastName: newLastName,
      contactNumber: newContactNumber,
      email: newEmail,
      password: newPassword,
      username: newUsername,
      address: {
        line1: newAddressLine1,
        line2: newAddressLine2,
        line3: newAddressLine3,
      },
    };
    customerService
      .createCustomer(customerObject)
      .then((returnedCustomer) => {
        setCustomers(customers.concat(returnedCustomer));
        setNewFirstName("");
        setNewLastName("");
        setNewPassword("");
        setNewEmail("");
        setNewUsername("");
        setNewContactNumber("");
        setNewAddressLine1("");
        setNewAddressLine2("");
        setNewAddressLine3("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={registerCustomer}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Contact Number"
            value={newContactNumber}
            onChange={(e) => setNewContactNumber(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="House #"
            value={newAddressLine1}
            onChange={(e) => setNewAddressLine1(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Street, Subdivision"
            value={newAddressLine2}
            onChange={(e) => setNewAddressLine2(e.target.value)}
          />
        </div>
        <div>
          <select
            value={newAddressLine3}
            onChange={(e) => setNewAddressLine3(e.target.value)}
          >
            <option value="">Brgy. San Isidro</option>
            <option value="option1">Brgy. San Jose</option>
            <option value="option2">Brgy. Dela Paz</option>
          </select>
        </div>
        <button type="submit">REGISTER</button>
      </form>
      <p>
        Already have an account? <Link to="/login/customer">Login here.</Link>
      </p>
    </div>
  );
}

export default RegisterForm;
