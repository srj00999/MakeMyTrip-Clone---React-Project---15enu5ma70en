
import React, { useState, useEffect } from "react";
import { DataAppContext } from "../../DataApp";
import { useContext } from "react";

export default function FlightData() {
    const [flightData, setFlightData] = useState([]);
    const [compareData, setCompareData] = useState();

    const localcontext = useContext(DataAppContext);
    const { appState } = localcontext;


    useEffect(() => {
        fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights")
            .then((response) => {
                response.json().then((result) => {
                    setFlightData(result);
                })
            })
    },
        [])

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
    console.log("comprare Data", c);


    return (
        <>
            <h1>Flight Display Page</h1>

            <div className='row'>
                <div className='col-md-12'>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}