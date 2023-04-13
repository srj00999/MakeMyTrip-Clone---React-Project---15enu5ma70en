import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavBar.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataAppContext } from "../DataApp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";




function NavBar() {

    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;
    const { username, loginStatus } = appState;

    const navigate = useNavigate();

    const logoutFn = () => {
        //update context variable
        setAppState({
            ...appState,
            loginStatus: false,
            username: ''
        })
        navigate('/flights');
    }


    return (
        <Row className="navbar">
            <Col xs={2}>
                <div >
                    <NavLink to='/flights'>Flights</NavLink>
                </div>
            </Col>
            <Col xs={2} >
                <div>
                    <NavLink to='/Hotels'>Hotels</NavLink>
                </div>
            </Col>
            <Col xs={2} >
                <div>
                    <NavLink to='/Trains'>Trains</NavLink>
                </div>
            </Col>
            <Col xs={6} >
                {
                    loginStatus ?
                        <>
                            <span>

                                <span>
                                    <span>

                                        <FontAwesomeIcon icon={faUser} style={{ fontSize: "35px" }} />
                                        {loginStatus && <NavLink> Hi {username} !</NavLink>}
                                    </span>

                                    <span>
                                        <Link onClick={logoutFn}>Logout</Link>

                                    </span>


                                </span>

                            </span>

                        </> :
                        <>

                            <span>
                                <span>
                                    <NavLink to='/login'>Login</NavLink>
                                </span>

                                <span>
                                    <NavLink to='/register'>Register</NavLink>
                                </span>
                            </span>
                        </>
                }
            </Col>
        </Row>
    )
}

export default NavBar;