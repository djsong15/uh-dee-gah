import React, { useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";

export default function Map() {
    const center = useMemo(() => ({
        lat: 34.0549,
        lng: -118.2426
    }), []);
    const options = useMemo(() => ({
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
    }), []);


    return <GoogleMap
        zoom={10}
        center={center}
        options={options}
        mapContainerClassName="map-container"
    >
    </GoogleMap>;
}