import React from "react";
import mmtlogo from '../images/mmtlogo.png'
import { Link } from "react-router-dom";

export default function Images() {

    return (
        <>
            <Link to='/flights'><img src={mmtlogo} /></Link>

        </>
    );
}