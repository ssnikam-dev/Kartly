import React, { useEffect, useRef, useState } from "react";
import "../../../css/LoginPage.css" // Optional: Include your CSS file for additional styling
import { Link, NavLink, useNavigate } from "react-router-dom";
import CommonScreen from "../../Structure/CommonScreen.js";
import home from "./home.js";
import { useAuth } from '../../../features/AuthProvider .js';
import { toast, ToastContainer } from "react-toastify";
import CONSTANTS from "../../utils/Constants.js";
import api from "../../utils/axiosSetup.js";
import Loader from "../../Structure/Loader.js";

export default function LoginPage() {

  const BaseUrl = CONSTANTS.BASE_URL + "/api-data/auth/login";

  // Set loading state before the request
  //setLoading(true);
  const [loading, setLoading] = useState(false);
  const username = useRef("");
  const password = useRef("");
  const { login } = useAuth();
  const history = useNavigate();

  function loginUser(event) {
    event.preventDefault();
    // Get values from the refs
    const usernameValue = username.current.value;
    const passwordValue = password.current.value;

    console.log("Logging in with username:", usernameValue, "password:", passwordValue);
    setLoading(true);
    // Create the payload (body)
    const obj = {
      email: usernameValue,
      password: passwordValue
    };
    api
      .post(BaseUrl, obj, {
        headers: {
          "Content-Type": "application/json",  // Set the content type to JSON
        },
        // withCredentials: true,

      })
      .then((result) => {
        // Successful login
        setLoading(false);
        toast.success("Login Successful", result.data);

        // Assuming the JWT token is sent in the response body as 'token'
        const { token } = result.data.token;  // Modify this according to your API response structure

        login(result.data.token);

        // Store token in localStorage (or sessionStorage)
        localStorage.setItem('authToken', result.data.token);

        history("/ecommerce/home")

        // You could update the context or state to reflect the logged-in user
        // For example, using context or useState to set auth token globally:
        // updateAuthToken(token);

        // Optionally, redirect to another page (e.g., home page or dashboard)
        // navigate('/dashboard');
      })
      .catch((error) => {
        setLoading(false);
        // Error handling (e.g., incorrect credentials, server error)
        console.error("Login failed:", error);
        toast.error("Login failed. Please check your credentials.");

        // Reset loading state if necessary
        //setLoading(false);
      })
      .finally(() => {
        setLoading(false);
        // Reset loading state when request is finished
        // setLoading(false);
      });



  }

  useEffect(() => {
    localStorage.removeItem("authToken");
  }, [])

  return (
    <div className="auth-shell">
      {loading && <Loader />} {/* Show loader when loading */}
      <div className="card auth-card">
        <div className="auth-brand"><i className="ri-shopping-bag-3-line"></i></div>
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-sub">Sign in to continue shopping</p>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Email</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="you@example.com"
              ref={username}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              ref={password}
            />
          </div>
          <NavLink onClick={loginUser} type="button" className="btn btn-primary btn-block">
            Sign in
          </NavLink>
          <div className="auth-divider">New here?</div>
          <NavLink to="/ecommerce/signup" className="btn btn-light btn-block">Create account</NavLink>
          <p className="text-center mt-4 mb-0" style={{ fontSize: '.88rem', color: 'var(--ink-500)' }}>
            Are you a seller? <NavLink to="/ecommerce/seller/login" style={{ fontWeight: 600 }}>Sign in here</NavLink>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
