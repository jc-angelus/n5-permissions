import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Permission from "./components/Permission";
import Permissions from "./components/Permissions";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/permissions" className="navbar-brand">
        PermissionApp
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/permissions"} className="nav-link">
              Home
            </Link>
          </li>          
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Permissions/>} />
          <Route path="/permissions" element={<Permissions/>} />          
          <Route path="/permissions/:id" element={<Permission/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
