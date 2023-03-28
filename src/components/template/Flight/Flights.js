import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "../../DataApp";
import FlightData from "./FlightData";




export default function Flights() {
    const [formdata, setFormdata] = useState({
        from : "",
        to: "", 
        });

    const localContext = useContext(DataAppContext);
    const {appState, setAppState}=localContext;
    const navigate =useNavigate();

    


    const updateData = (e) => {
        // console.log(e.target.id, e.target.value);
        // let tempObj = {};
        // tempObj[e.target.id] = e.target.value.trim();
        // setFormdata({
        //   ...tempObj
        // });
        const {name, value} = e.target;
        if(name === "from"){
            setFormdata((prev)=>({...prev,from: value}));
        }
        else if(name === "to"){
            setFormdata((prev)=>({...prev,to: value}));
            
        }
      }

   const handleSubmit=(event)=>{
    event.preventDefault();
    setAppState({
        ...appState,
        searchFrom: formdata.from,
        searchTo: formdata.to
      });
   }
    return (
        <>
            <div>
            <h1>Flight Search Page</h1>
                <form onSubmit={handleSubmit}>
                    <label>From:</label>
                    <select id="from" name="from" onChange={updateData }>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                    <label>To:</label>
                    <select id="to" name="to" onChange={updateData}>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Goa">Goa</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Banglore">Banglore</option>
                    </select>
                    <br></br>
                    <button value="submit" onSubmit={handleSubmit}>Submit</button>
                    
                </form>
            </div>
            <FlightData/>
        
        </>
    )
}

