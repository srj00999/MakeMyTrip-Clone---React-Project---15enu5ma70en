import React, { useContext, useState } from "react";
import { DataAppContext } from "../../DataApp";
import { useEffect } from "react";
import '../Train/TrainData.css';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TrainData() {

    const [trainData, setTrainData] = useState([]);

    // const [compareData, setCompareData] = useState();

    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;

    async function Api() {
        const data = await fetch("https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains");
        const train = await data.json();
        return setTrainData(train);
    }


    useEffect(() => {
        Api();
    },
        [])



    let count = 0;
    const displayData = () => {
        for (let i = 0; i < trainData.length; i++) {
            console.log("count...1", count);
            if (trainData[i].from == appState.searchFrom) {
                // console.log('trainData....from', trainData[i].from);
                if (trainData[i].to == appState.searchTo) {
                    console.log("count...2", count);
                    const item = trainData[i];
                    count = count + 1;
                    return item;
                }
            }
        }
    }


    const c = displayData();

    useEffect(() => {
        setAppState({
            ...appState,
            baseFare: c?.price
        })

    }, [c?.price])


    return (
        <div className="flightdatacontainer">
            {count ?
                <div>
                    <div><h1>Available Ticket</h1></div>
                    <div className='container'>
                        <Row xs={12} className='container_row' >
                            <Col className='container_col' >
                                <span><h5>FROM:</h5></span>
                                <span><h2>{c?.from}</h2></span>
                                <span><h5>TO:</h5></span>
                                <span><h2>{c?.to}</h2></span>

                            </Col>
                            <Col className='container_col'>
                                <span><h5>DEPARTURE</h5></span>
                                <span><h4>{c?.departure?.departureTime}{"|"}{c?.departure?.departureDate}</h4></span>
                                <span><h5>TRAIN NUMBER</h5></span>
                                <span><h4>{c?.train_number}</h4></span>
                            </Col>
                            <Col className='container_col'>
                                <span><h5>Price:</h5></span>
                                <span><h2>{c?.price}</h2></span>
                                <span><h5>KILOMETERS</h5></span>
                                <span><h2>{c?.kilometers}</h2></span>
                                <span><h5>Duration:</h5></span>
                                <span><h2>{c?.duration}</h2></span>
                            </Col>
                            <Col className='buttoncontainer'>
                                <span ><Link to='/Checkout'><button className="btn"><h3>BOOK</h3></button></Link></span>
                            </Col>
                        </Row>
                    </div>
                </div> :
                <div>
                    <h1>Ticket Not Available</h1>
                </div>}
        </div>
    );
}