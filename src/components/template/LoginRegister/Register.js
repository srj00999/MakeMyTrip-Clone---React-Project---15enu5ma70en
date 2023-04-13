import React, { useState, useEffect } from 'react'
import '../LoginRegister/Register.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const initialData = {
        username: '',
        password: '',
    }


    const [formdata, setFormdata] = useState(initialData);
    const [formerror, setFormerror] = useState({});

    const [status, setStatus] = useState(false);

    const navigate  = useNavigate();


    const updateData = (e) => {

        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...formdata, ...tempObj
        });
    }


    const registerFn = () => {

        const ret = validationFn();

        if (ret) {

            setStatus(true);

            let temp = JSON.parse(localStorage.getItem('users')) || [];
            localStorage.setItem('users', JSON.stringify([...temp, formdata]));

            setFormdata(initialData);

            if (setStatus) {
                setTimeout(() => {
                    navigate('/login');
                }
                    , 2000);
            }
        }

    }

    useEffect(() => {
        let temp = localStorage.getItem('users');

    }, [status])

    const validationFn = () => {

        let errorObj = {};

        if (formdata.username === '') {
            errorObj.username = 'UserName is empty'
        }

        if (formdata.password === '') {
            errorObj.password = 'Password is empty'
        }

        setFormerror(errorObj);

        if (Object.keys(errorObj).length > 0) {
            return false
        }
        else {
            return true
        }

    }

    return (
        <div className='registerdatacontainer'>
            <div className="registercontainer">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <span ><FontAwesomeIcon icon={faLock} style={{ fontSize: "35px", alignItems: "center" }} /></span>
                    <span><h2>Register</h2></span>
                </div>
                <input className="inputbox" placeholder="UserId" type="text" id="username" onChange={updateData} value={formdata.username} />
                <div className='text-danger errormsg'>{formerror.username}</div>

                <input className="inputbox" placeholder="Password" type="password" id="password" onChange={updateData} value={formdata.password} />
                <div className='text-danger errormsg'>{formerror.password}</div><br></br>

                <button className="registerbtn" onClick={registerFn}>Register</button>
                <br></br>
            </div>

            <br></br>

            {status && <div class="alert alert-success" role="alert">
                <h2>Successfully Registered</h2>
                
            </div>
            }
        </div>
    )
}

export default Register
