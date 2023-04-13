
import React, { useState, useEffect } from "react";
import { DataAppContext } from "../../DataApp";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import '../Hotel/HotelsData.css';
import { Link } from "react-router-dom";

export default function HotelsData() {

    const [hoteldata, setHotelData] = useState([]);




    const localcontext = useContext(DataAppContext);
    const { appState, setAppState } = localcontext;


    async function Api() {
        const data = await fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels");
        const htl = await data.json();
        // console.log(htl);
        return setHotelData(htl);
    }

    let count = 0;
    const displayData = () => {
        for (let i = 0; i < hoteldata.length; i++) {
            if (hoteldata[i].city = appState.cityOrLocation) {
                const item = hoteldata[i];
                count = count + 1;
                return item;
            }
        }
    }

    const c = displayData();
    // console.log("c.........", c);

    useEffect(() => {
        Api();
    },
        []);

    useEffect(() => {
        setAppState({
            ...appState,
            baseFare: c?.price_per_night
        })

    }, [c?.price_per_night])




    return (
        <div className="flightdatacontainer">
            {
                count == 1 ? <div>
                    <div><h1>Available Hotels</h1></div>

                    <div className='container'>
                        <Row xs={12} className='container_row' >
                            <Col className='container_col' >
                                <span><h5>HOTEL:</h5></span>
                                <span><h2>{c?.city}</h2></span>
                                <span><h5>CITY:</h5></span>
                                <span><h2>{c?.hotel_name}</h2></span>
                                <span><h5>RATING:</h5></span>
                                <span><h3>{c?.rating}{"/10"}</h3></span>
                            </Col>
                            <Col className='container_col'>
                                <span><h5>CHECK-IN</h5></span>
                                <span><h4>{c?.check_in}</h4></span>
                                <span><h5>CHECK-OUT</h5></span>
                                <span><h4>{c?.check_out}</h4></span>
                            </Col>
                            <Col className='container_col'>
                                <span><h5>Price:</h5></span>
                                <span><h2>{c?.price_per_night}</h2></span>
                                <span><h5>Room</h5></span>
                                <span><h2>{c?.room_type}</h2></span>
                                <span><h5>Guests:</h5></span>
                                <span><h2>{c?.guests}</h2></span>
                            </Col>
                            <Col className='buttoncontainer'>
                                <span><Link to='/Checkout'><button className="btn"><h3>BOOK</h3></button></Link></span>
                            </Col>
                        </Row>
                    </div>
                </div> :
                    <div><h1>Hotel Not Available</h1></div>
            }
        </div>
    )
}