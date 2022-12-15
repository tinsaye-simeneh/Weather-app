import React from "react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "" || password === "")
        {
            alert("Please fill all the fields");
            return;
        }
        else if(email === "weathertest@gmail.com" || password === "weather123")
        {
            alert("You are logged in");
            window.location.href = "http://localhost:3000/Home";
        }

        console
        .log("Email: ", email, "Password: ", password);
    };


    return (
        <div className="container-fluid pb-4 pt-5">
        <div className="row py-5">
            <div className="col-md-4 col-12 mx-auto">
            <div className="card shadow-lg">
                <div className="card-body">
                <div className="row mb-4">
                    <h5 className="text-center text-dark py-3">Welcome Back</h5>
            <h3 className="text-center text-dark pb-3">Login</h3>
                    <div className="col-md-12 col-12">
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                   
                    <button type="submit" className="btn form-control btn-primary mt-4 mb-4 mw-100">
                        Submit
                    </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

export default Login;