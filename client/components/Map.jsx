import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

export default function Map() {
    const locList = useSelector(state => state.locations.locList);

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
        {locList.length && locList.map((el) => {
            return <MarkerF
                key={el.locId}
                position={el.geoPos}
                options={{
                    icon: {
                        fillColor: '#14c214'
                    }
                }}
            />
        })}
    </GoogleMap>;
}