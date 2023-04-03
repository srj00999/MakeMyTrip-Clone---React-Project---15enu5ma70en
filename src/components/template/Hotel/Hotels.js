import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import '../Hotel/Hotels.css';
import { useContext } from "react";
import { DataAppContext } from "../../DataApp";
import HotelsData from "./HotelsData";

export default function Hotels() {

    const initialData = {
        location:'',
        checkIn:'',
        checkOut:'',
        guest:''
    }


    const [formData, setFormData] = useState(initialData);

    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;


    const updateData = (e)=> {
        // console.log( e.target.id,  e.target.value );
        let tempObj = {};
        tempObj[e.target.id] = e.target.value;
        setFormData({
            ...formData, ...tempObj
        });
    }

    

    const handleFormData =(e)=>{
        e.preventDefault();
       setAppState({
        ...appState,
        cityOrLocation: formData.location,
        checkInData:formData.checkIn,
        checkOutDta:formData.checkOut,
        guest:formData.guest
        
       });
   }




    return (
        <>
            <div>
                <form onSubmit={handleFormData}>
                    <Row className="hotel_container">
                        <Col className="flex-container">
                            <span>
                                <label>CITY, OR LOCATION</label><br></br>
                                <select id="location" name="location" onChange={updateData} >
                                    <option value="Goa">Goa</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Manali">Manali</option>
                                </select>
                            </span>
                        </Col>
                        <Col className="flex-container" >
                            <span><label>CHECK-IN</label><br></br>
                                <input type='date' id="checkIn" onChange={updateData}></input></span>
                        </Col>
                        <Col className="flex-container" >
                            <span>
                                <label>CHECK-OUT</label><br></br>
                                <input type='date' id="checkOut" onChange={updateData}></input>
                            </span>
                        </Col>
                        <Col className="flex-container" >
                            <span>
                                <label>GUESTS</label><br></br>
                                <input type='number' id="guest" onChange={updateData}></input>
                            </span>
                        </Col>

                    </Row>
                    <button type="submit" value='submit' onSubmit={handleFormData}>Search</button>
                </form>
            </div>
            <div>
                <HotelsData/>
            </div>
        </>
    )
}