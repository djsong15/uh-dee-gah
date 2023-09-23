import React from "react";
import { useLoadScript } from "@react-google-maps/api";

import Map from "./components/Map.jsx";
import LocationSearch from "./components/LocationSearch.jsx";

export default function MainContainer() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
        libraries: ['places']
    });

    
    return isLoaded ? (
        <div id="main" className="container">
            <h2>i'm a container, boi</h2>
            <Map />
            <LocationSearch />
            <ul>
                <li>example 1</li>
                <li>example 2</li>
                <li>example 3</li>
            </ul>
        </div>
    ) : <div>Loading...</div>;
}
