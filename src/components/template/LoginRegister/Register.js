import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const[fname,setFirstName] = useState('');
    const[lname,setLastName] = useState('');
    const[age,setAge] = useState('');
    const[email,setEmail] = useState('');


    const navigate = useNavigate()

   const handleRegister = (e)=>{
    e.preventDefault();

    axios.post('https://6419621429e7e36438fc1184.mockapi.io/crud',{
        e_fname :fname,
        e_lname:lname,
        e_age: age,
        e_email:email
    }).then(()=>{
        navigate('/login');
        alert("Registered successfully");
    })

   }
    return (
        <>
            <div className="row d-flex justify-content-sm-end p-4">
                <div className="col-md-4">
                    <div className="bg-primary p-4 text center d-flex justify-content-between" >
                        <h1>Register</h1>
                        <button style={{ background: "blue", color: "white", borderRadius: "6%", padding: "5px", border:"solid 2px darkblue", textDecoration:"none"}} onClick={() => { navigate('/login') }}>
                            <h1>Login</h1>
                        </button>
                    </div>
                    <form onSubmit={handleRegister}>
                    <div className="form-group">
                            <label>First Name:</label>
                            <input type='text' placeholder="First Name" className="form-control" onChange={(e) => setFirstName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type='text' placeholder="Last Name" className="form-control" onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Enter Age:</label>
                            <input type='number' placeholder="Age" className="form-control" onChange={(e)=> setAge(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Enter Email:</label>
                            <input type='email' placeholder="Email" className="form-control" onChange={(e)=> setEmail(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="d-grid">
                            <input type='submit' value='Register' className="btn btn-primary rounded" />
                        </div>
                    </form>


                </div>

            </div>
        </>
    )
}