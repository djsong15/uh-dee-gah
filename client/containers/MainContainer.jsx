import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { useLoadScript } from "@react-google-maps/api";

import Map from "../components/Map.jsx";
import LocContainer from "./LocContainer.jsx";

const libraries = ['places', 'marker'];

export default function MainContainer() {
    const [ map, setMap ] = useState(null);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
        libraries: libraries
    });

    return (
        <div id="main-container">
            <LocContainer isLoaded={isLoaded}/>
            <div id="map-container">
                {isLoaded ? <Map setMap={setMap}/> : <div>Loading...</div>}
            </div>  
        </div>
    );
}
