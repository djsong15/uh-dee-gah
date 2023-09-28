import React, { useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector.js";
import { useLoadScript } from "@react-google-maps/api";

import Map from "../components/Map.jsx";
import LocContainer from "./LocContainer.jsx";

const libraries = ['places', 'marker'];

export default function MainContainer() {
    // const locList = useSelector(state => state.locations.locList);
    const [ mSwitch, setMSwitch ] = useState(false);
    const flipMSwitch = () => setMSwitch(mSwitch ? false : true);
    console.log('MainContainer state', mSwitch);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
        libraries: libraries
    });

    return (
        <>
            <div className="container">
                <h2>i'm a container, son</h2>
                {isLoaded ? <Map /> : <div>Loading...</div>}
            </div>               
            <LocContainer flipMSwitch={flipMSwitch} isLoaded={isLoaded}/>
        </>
    );
}
