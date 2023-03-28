import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavBar.css'

function NavBar() {
    return (
        <Row className="navbar">
            <Col >
                <div >
                    <Link to='/flights'>Flights</Link>
                </div>
            </Col>
            <Col>
                <div>
                    <Link to='/Hotels'>Hotels</Link>
                </div>
            </Col>
            <Col>
                <div><Link to='/Trains'>Trains</Link>
                </div>
            </Col>
        </Row>
    )
}

export default NavBar;