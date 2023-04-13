import React from "react";
import { useState } from "react";
import { DataAppContext } from "../../DataApp";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../LoginRegister/Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
    const initialData = {
        username: '',
        password: '',
    }

    const [formdata, setFormdata] = useState(initialData);
    const [formerror, setFormerror] = useState({});
    const [loginstatus, setStatus] = useState(false);
    const [loginApiFailStatus, setLoginApiFailStatus] = useState(false);

    const localContext = useContext(DataAppContext);
    const navigate = useNavigate();

    const updateData = (e) => {
        // console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...formdata, ...tempObj
        });
    }

    const loginFn = () => {

        const ret = validationFn();

        if (ret) {

            let temp = JSON.parse(localStorage.getItem('users'));

            if (temp) {
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].username === formdata.username) {
                        if (temp[i].password === formdata.password) {
                            setStatus(true);
                            let obj = {
                                ...localContext.appState,
                                loginStatus: true,
                                username: formdata.username,
                            }
                            localContext.setAppState(obj)

                            navigate('/flights')
                        }
                        else {
                            setLoginApiFailStatus(true);
                        }
                    }
                    else {
                        setLoginApiFailStatus(true);
                    }
                }
            }
            else {
                setLoginApiFailStatus(true);
            }

            setFormdata(initialData);
        }
    }


    useEffect(() => {
        let temp = localStorage.getItem('users');
        // console.log(JSON.parse(temp));
    }, [loginstatus]);


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

    console.log('apiloginstatus', loginApiFailStatus);

    return (
        <div className="logindatacontainer">
            <div className="logincontainer" >

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <span ><FontAwesomeIcon icon={faLock} style={{ fontSize: "35px", alignItems: "center" }} /></span>
                    <span><h2>Log In</h2></span>
                </div>

                <input className="inputbox" placeholder="UserId" type="text" id="username" onChange={updateData} value={formdata.username} />
                <div className='text-danger errormsg'>{formerror.username}</div>

                <input className="inputbox" placeholder="Password" type="password" id="password" onChange={updateData} value={formdata.password} />
                <div className='text-danger errormsg'>{formerror.password}</div><br></br>

                <button className="loginbtn" onClick={loginFn}>Login</button>
            </div>
            <br></br>
            <br></br>

            {loginstatus && <div className="alert alert-success" role="alert">
                <h2>Successfully Logged In</h2>
            </div>
            }

            {loginApiFailStatus && <div className="alert alert-danger" role="alert">
                <h2>Login Failed</h2>
            </div>
            }

        </div>
    )
}

export default Login
