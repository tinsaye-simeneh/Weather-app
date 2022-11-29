import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.min.js';
import Quotes from "./main";

function App() {
    return(
        <>
        <Quotes/>
    </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
