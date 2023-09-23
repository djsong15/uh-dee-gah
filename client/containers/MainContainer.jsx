import React from "react";
import { useLoadScript } from "@react-google-maps/api";

import Map from "../components/Map.jsx";
import LocContainer from "./LocContainer.jsx";

const libraries = ['places'];

export default function MainContainer() {
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
            <LocContainer isLoaded={isLoaded}/>
        </>
    );
}
