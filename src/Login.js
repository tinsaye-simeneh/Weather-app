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
                    <div className="form-group form-check mt-2">
                        <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                        Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                        Submit
                    </button>
                
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