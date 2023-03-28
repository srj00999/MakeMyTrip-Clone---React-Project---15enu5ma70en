import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from "../Images";
import NavBar from "./NavBar";
import LoginRegister from "./LoginRegister/LoginRegister";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <>
            <Row className="border-bottom  p-4">
            <Col xs={8}><Images/></Col>
            <Col xs={3}><NavBar/></Col>
            <Col xs={1}><Link to='/LoginRegister'><button className="rounded p-1">Login/Register</button></Link></Col>
            </Row>
        </>
    )
}