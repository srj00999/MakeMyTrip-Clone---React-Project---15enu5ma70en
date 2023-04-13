import React, { useContext, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataApp, { DataAppContext } from "../../DataApp";
import TrainData from "./TrainData";

export default function Trains() {

    const initialdata = {
        from: '',
        to: ''
    }
    const [pageStatus, setPageStatus] = useState(false);
    const [formdata, setformData] = useState(initialdata);
    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;


    const updateData = (e) => {
        // console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value;
        // console.log(tempObj);
        setformData(
            {
                ...formdata, ...tempObj
            }
        )
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
                        <Col>
                            <span>
                                <label>FROM</label><br></br>
                                <select className="selectoption" id="from" name="from" onChange={updateData}>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Kashmir">Kashmir</option>

                                </select>
                            </span>
                        </Col>
                        <Col>
                            <span>
                                <label>TO</label><br></br>
                                <select className="selectoption" id="to" name="to" onChange={updateData}>
                                    <option value="Kashmir">Kashmir</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Banglore">Banglore</option>
                                </select>
                            </span>
                        </Col>
                        <Col>
                            <span>
                                <label>TRAVEL DATE</label><br></br>
                                <input className="selectoption" type='date'></input>
                            </span>
                        </Col>
                        <Col>
                            <span>
                                <label>CLASS</label><br></br>
                                <input className="selectoption" type='text'></input>
                            </span>
                        </Col>
                        <Row className="btncontainer">
                            <button className="selectbtn" value="submit" onSubmit={handleSubmit}>Search</button>
                        </Row>
                    </Row>
                </form>
            </div>
            <div className="divline"></div>
            {pageStatus && <div > <TrainData /></div>}
        </>
    )
}