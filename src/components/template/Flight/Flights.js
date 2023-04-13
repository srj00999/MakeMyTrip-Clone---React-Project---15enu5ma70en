import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "../../DataApp";
import FlightData from "./FlightData";
import { Row, Col } from "react-bootstrap";
import "../Flight/Flights.css";


export default function Flights() {
    const [formdata, setFormdata] = useState({
        from: "",
        to: "",
    });

    const [pageStatus, setPageStatus] = useState(false);

    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;
    const navigate = useNavigate();


    const updateData = (e) => {

        const { name, value } = e.target;
        if (name === "from") {
            setFormdata((prev) => ({ ...prev, from: value }));
        }
        else if (name === "to") {
            setFormdata((prev) => ({ ...prev, to: value }));

        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setAppState({
            ...appState,
            searchFrom: formdata.from,
            searchTo: formdata.to
        });
        setPageStatus(true);
    }
    return (
        <>
            <div className="flightcontainer">
                <form onSubmit={handleSubmit}>
                    <Row >
                        <Col >
                            <span >
                                <label >FROM</label><br></br>
                                <select className="selectoption" id="from" name="from" onChange={updateData}>
                                    <option value="Kashmir">Kashmir</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Chennai">Chennai</option>
                                </select>
                            </span>

                        </Col>
                        <Col >
                            <span>
                                <label>TO</label><br></br>
                                <select className="selectoption" id="to" name="to" onChange={updateData}>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Kashmir">Kashmir</option>
                                    <option value="Banglore">Banglore</option>
                                </select>
                            </span>
                        </Col>
                        <Col >
                            <span>
                                <label>DEPARTURE</label><br></br>
                                <input className="selectoption" type='date'></input>
                            </span>
                        </Col>
                        <Col >
                            <span>
                                <label>RETURN</label><br></br>
                                <input className="selectoption" type='date'></input>
                            </span>
                        </Col>
                        <Row className="btncontainer">
                            <button className="selectbtn" value="submit" onSubmit={handleSubmit}>Search</button>
                        </Row>

                    </Row>
                </form>
            </div>
            <div className="divline"></div>

            {pageStatus && <div > <FlightData /></div>
            }

        </>
    )
}

