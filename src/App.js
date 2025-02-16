import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ValidateOtp from "./ValidateOtp";
import Login from "./Login";

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "linear-gradient(135deg,rgb(60, 99, 136),rgb(29, 132, 62))",
        color: "white",
        padding: "20px",
        textAlign: "center",
        font:"Mulish",
        fontSize: "24px",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)"

       
      }}>
        Analytics Dashboard
      </header>

      <div style={{ flex: 1 }}>{children}</div>

      <footer style={{
        background: "linear-gradient(135deg,rgb(60, 99, 136),rgb(29, 132, 62))",
        color: "white",
        padding: "10px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%"
      }}>
        © 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/validate-otp" element={<ValidateOtp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
