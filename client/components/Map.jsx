import React, { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

export default function Map({ setMap }) {
    const locationsState = useSelector(state => state.locations);
    const { locList, totalLocsVisited } = locationsState;
    
    const onMapLoad = (map) => {
        console.log('render map comp', totalLocsVisited);
        setMap(map);
    };

    const center = useMemo(() => ({
        lat: 34.0549,
        lng: -118.2426
    }), []);
    const options = useMemo(() => ({
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        minZoom: 3
    }), []);

    const visitedOptions = {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: 'green',
        strokeColor: 'lightgreen',
        fillOpacity: 1.0
    };
    const unvisitedOptions = {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: 'red',
        strokeColor: 'pink',
        fillOpacity: 1.0
    }

    return <GoogleMap
        zoom={3}
        center={center}
        options={options}
        id="map-container"
        onLoad={onMapLoad}
    >
        {locList.length && locList.map((el) => {
            return <MarkerF
                key={el.locId}
                position={el.geoPos}
                icon={el.visited ? visitedOptions : unvisitedOptions}
            />
        })}
    </GoogleMap>;
}

