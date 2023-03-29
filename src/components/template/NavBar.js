import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavBar.css'
import { NavLink } from "react-router-dom";

function NavBar() {
    
    return (
        <Row className="navbar">
            <Col >
                <div >
                    <NavLink to='/flights'>Flights</NavLink>
                </div>
            </Col>
            <Col>
                <div>
                    <NavLink to='/Hotels'>Hotels</NavLink>
                </div>
            </Col>
            <Col>
                <div><NavLink to='/Trains'>Trains</NavLink>
                </div>
            </Col>
        </Row>
    )
}

export default NavBar;