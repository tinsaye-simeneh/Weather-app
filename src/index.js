import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./Home";
import Navbar from './Navbar';
import Login from './Login';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {

    if (localStorage.getItem("LoginStatus") === null) {
        localStorage.setItem("LoginStatus", false);
    }

    return(
        <div className="container-fluid bg-dark pb-2">
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
