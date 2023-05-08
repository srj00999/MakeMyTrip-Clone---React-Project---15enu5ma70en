
import React, { useState, useEffect } from "react";
import { DataAppContext } from "../../DataApp";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import '../Flight/FlightData.css';
import { Link } from "react-router-dom";


export default function FlightData(props) {
  const {flightData} = props;
    console.log("props", props);

    const localcontext = useContext(DataAppContext);
    const { appState, setAppState } = localcontext;


    let count = 0;
    const displayData = () => {
        for (let i = 0; i < flightData.length; i++) {
            if (flightData[i].from === appState.searchFrom) {
                if (flightData[i].to === appState.searchTo) {
                    const item = flightData[i];
                    count = count + 1;
                    return item;
                }
            }
        }
    }
    const c = displayData();
    const filterFD = [c];
    console.log("filterFD", filterFD);

    useEffect(() => {
        setAppState({
            ...appState,
            baseFare: c?.price
        })

    }, [c?.price])


    return (

        <div className="flightdatacontainer">
            
                    <div>
                        {count==1?<h1>Available Tickets</h1> : <h1>Ticket Not Available</h1>}
                        {
                           count && filterFD?.map((item, idx) => {
                                const { from, to , airlineName ,departure,price,via,duration} = item;
                                const {returnTime, returnDate}= item.return;
                                return (
                                    <div className='container' key={idx + 1}>
                                        <Row xs={12} className='container_row' >
                                            <Col className='container_col' >
                                                <span><h5>FROM:</h5></span>
                                                <span><h2>{from}</h2></span>
                                                <span><h5>TO:</h5></span>
                                                <span><h2>{to}</h2></span>
                                                <span><h5>Airline:</h5></span>
                                                <span><h2>{airlineName}</h2></span>
                                            </Col>
                                            <Col className='container_col'>
                                                <span><h5>DEPARTURE</h5></span>
                                                <span><h4>{departure?.departureTime}{"|"}{departure?.departureDate}</h4></span>
                                                <span><h5>RETURN</h5></span>
                                                <span><h4>{returnTime}{"|"}{returnDate}</h4></span>
                                            </Col>
                                            <Col className='container_col'>
                                                <span><h5>Price:</h5></span>
                                                <span><h2>{price}</h2></span>
                                                <span><h5>Via</h5></span>
                                                <span><h2>{via}</h2></span>
                                                <span><h5>Duration:</h5></span>
                                                <span><h2>{duration}</h2></span>
                                            </Col>
                                            <Col className='buttoncontainer'>
                                                <span ><Link to='/Checkout'><button className="btn"><h3>BOOK</h3></button></Link></span>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })
                        }

                    </div>      
            
        </div>
    )
}