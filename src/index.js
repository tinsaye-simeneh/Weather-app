import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.min.js';
import Main from "./main";
import Navbar from './Navbar';
import Login from './Login';

function App() {
    return(
        <div className="container-fluid bg-dark pb-2">
        <Navbar />
        <Login/>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
