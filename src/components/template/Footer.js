import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../template/Footer.css'



export default function Footer() {
    return (
        <Row className="footer p-5">
            <Col></Col>
            <Col>
            <div>
                <p>© 2023 MAKEMYTRIP PVT. LTD.</p>
                <span>
                <p>Country</p>
                <p>India USA UAE</p>
                </span>
            </div>
            </Col>
        </Row>
    )
}