
import React, { useState, useEffect } from "react";
import { DataAppContext } from "../../DataApp";
import { useContext } from "react";
import { json } from "react-router-dom";

export default function FlightData() {
    const [flightData, setFlightData] = useState([]);
    const [compareData, setCompareData] = useState(c);

  
    const localcontext = useContext(DataAppContext);
    const { appState } = localcontext;

    async function Api(){
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
        <h1>Flight Display Page</h1>
        <h1></h1>
             <div className='row'>
                <div className='col-md-12'>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}