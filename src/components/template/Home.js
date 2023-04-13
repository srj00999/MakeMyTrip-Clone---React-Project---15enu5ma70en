import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../template/Home.css';
import Header from "./Header";




export default function Home() {
    return (
        <div className="home" >
            <Row className=" p-1">
                <Col>
                    <Header />
                </Col>
            </Row>
        </div>
    )
}