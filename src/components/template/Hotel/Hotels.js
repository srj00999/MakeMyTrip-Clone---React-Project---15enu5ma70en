import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Hotels() {
    return (
        <>
            <Row className="p-5">
                <Col>
                    <label>CITY,PROPERTY NAME OR LOCATION</label><br></br>
                    <input type='text' placeholder='Delhi' /><br></br>
                </Col>
                <Col>

                    <label>CHECK-IN</label><br></br>
                    <input type='date' placeholder='Delhi' /><br></br>
                </Col>
                <Col>
                    <label>CHECK-OUT</label><br></br>
                    <input type='date' placeholder='Delhi' /><br></br>
                </Col>
                <Col>
                    <label>ROOMS & GUESTS</label><br></br>
                    
                </Col>
            </Row>
        </>
    )
}