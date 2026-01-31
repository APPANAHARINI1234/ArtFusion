// src/pages/Auth.jsx
import { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      activeTab === "register"
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

    const payload =
      activeTab === "register"
        ? form
        : { email: form.email, password: form.password };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>{activeTab === "login" ? "Welcome Back" : "Create Account"}</h2>

          {activeTab === "register" && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            {activeTab === "login" ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
