import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from "../Images";
import NavBar from "./NavBar";

// import '../template/Header.css';



export default function Header() {


    return (
        <>
            <Row className="border-bottom  p-4">
                <Col xs={6}><Images /></Col>
                <Col xs={6}><NavBar /></Col>

            </Row>
        </>
    )
}