import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addLocation } from "../reducers/locations";
import { StandaloneSearchBox } from "@react-google-maps/api";

export default function LocationSearch() {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const placeChangeHandler = () => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            console.log(place);
            // console.log(place.geometry.location.lng());
        }
        console.log(inputRef.current);
    }
        
    
    console.log(inputRef);
    return (
        <>
            <StandaloneSearchBox
                onLoad={ref => inputRef.current = ref}
                onPlacesChanged={placeChangeHandler}
                options={{
                    fields: ['geometry', 'name']
                }}
            >
                <input
                    id="location-combobox"
                    type="text"
                    placeholder="Where to?"
                    autoFocus
                />
            </StandaloneSearchBox>
            <button
                onClick={() => {
                    if (inputRef.current !== '') {
                        const [place] = inputRef.current.getPlaces();
                    }
                    if (place) dispatch(addLocation(place.name));
                }}
            >Submit</button>
        </>
    );
};