import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6419621429e7e36438fc1184.mockapi.io/crud', {

            e_email: email,
            e_password:password
            
        }).then(() => {
            navigate('/');
            alert("You are sucessfully Login");
        })
    }
    return (
        <>
            <div className="row d-flex justify-content-sm-end p-4">
            <div className="md-col">
                <div className="col-md-4">

                    <div className="bg-primary p-4 text center d-flex justify-content-between" ><span><h1>Login</h1></span>
                        <span >
                            <button style={{ background: "blue", color: "white", borderRadius: "6%", padding: "5px", border: "solid 2px darkblue" }} onClick={() => { navigate('/register') }}>
                                <h1>Register</h1>
                            </button>
                        </span>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label>Enter Email:</label>
                            <input type='email' placeholder="Email" className="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Enter Password:</label>
                            <input type='password' placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="d-grid">
                            <input type='submit' value='Login' className="btn btn-primary rounded" />
                        </div>
                    </form>
                    
                </div>
                </div>

            </div>
        </>
    )
}