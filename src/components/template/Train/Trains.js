import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Trains(){
    return(
        <>
            
            <Row className="p-5">
                <Col>
                    <label>FROM</label><br></br>
                    <input type='text' placeholder='Delhi' /><br></br>
                </Col>
                <Col>

                    <label>TO</label><br></br>
                    <input type='text' placeholder='Delhi' /><br></br>
                </Col>
                <Col>
                    <label>TRAVEL DATE</label><br></br>
                    <input type='date' placeholder='Delhi' /><br></br>
                </Col>
                <Col>
                    <label>CLASS</label><br></br>
                    
                </Col>
            </Row>
        </>
    )
}