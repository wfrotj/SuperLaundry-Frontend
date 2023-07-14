import React, { useEffect } from "react";
import loginService from "../services/loginService";
import customerService from "../services/customerService";
import { useNavigate, Link } from "react-router-dom";

function LoginForm({
  username,
  setUsername,
  password,
  setPassword,
  setCustomer,
  customer,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (customer?.token) navigate("/");
  }, [customer, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    loginService
      .login({
        username,
        password,
      })
      .then((res) => {
        window.localStorage.setItem("loggedCustomer", JSON.stringify(res));
        customerService.setToken(res.token);
        console.log(res);
        setCustomer(res);
        setUsername("");
        setPassword("");
      })
      .catch((error) => alert(error.response.data.error));
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>USERNAME</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <p>
        Dont have an account yet?{" "}
        <Link to="/customer/registration">Register here.</Link>{" "}
      </p>
    </div>
  );
}

export default LoginForm;
