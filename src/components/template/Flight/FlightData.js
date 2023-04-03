
import React, { useState, useEffect } from "react";
import { DataAppContext } from "../../DataApp";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import '../Flight/FlightData.css';

export default function FlightData() {
    const [flightData, setFlightData] = useState([]);
    const [compareData, setCompareData] = useState(c);


    const localcontext = useContext(DataAppContext);
    const { appState } = localcontext;

    async function Api() {
        const data = await fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights");
        const flite = await data.json();
        console.log(flite);
        return setFlightData(flite);
    }

    useEffect(() => {
        Api();
    },
        []);

    const displayData = () => {
        for (let i = 0; i < flightData.length; i++) {
            if (flightData[i].from === appState.searchFrom) {
                if (flightData[i].to === appState.searchTo) {
                    const item = flightData[i];
                    return item;
                }
            }
        }
    }
    const c = displayData();
    console.log("displayData......", compareData);

    return (
    
        <> 
        <div><h1>Available Ticket</h1></div>
        <div className='container'>
            <Row xs={12} className='container_row' >
                <Col className='container_col' >
                    <span><h5>FROM:</h5></span>
                    <span><h2>{c?.from}</h2></span>
                    <span><h5>TO:</h5></span>
                    <span><h2>{c?.to}</h2></span>
                    <span><h5>Airline:</h5></span>
                    <span><h2>{c?.airlineName}</h2></span>
                </Col>
                <Col className='container_col'>
                    <span><h5>DEPARTURE</h5></span>
                    <span><h4>{c?.departure?.departureTime}{"|"}{c?.departure?.departureDate}</h4></span>
                    <span><h5>RETURN</h5></span>
                    <span><h4>{c?.return.returnTime}{"|"}{c?.return.returnDate}</h4></span>
                </Col>
                <Col className='container_col'>
                    <span><h5>Price:</h5></span>
                    <span><h2>{c?.price}</h2></span>
                    <span><h5>Via</h5></span>
                    <span><h2>{c?.via}</h2></span>
                    <span><h5>Duration:</h5></span>
                    <span><h2>{c?.duration}</h2></span>
                </Col>
                <Col className='container_col'>
                    <span ><button className="btn"><h3>BOOK</h3></button></span>
                </Col>
            </Row>
        </div>
        </>
    )
}