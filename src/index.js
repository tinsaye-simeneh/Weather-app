import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
    return(
        <>
    <Navbar/>
    </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
