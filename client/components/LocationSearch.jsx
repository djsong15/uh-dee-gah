import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addLocation } from "../reducers/locations";
import { StandaloneSearchBox } from "@react-google-maps/api";

export default function LocationSearch() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const placeChangeHandler = () => {
        const [ place ] = inputRef.current.getPlaces();
        if (place) {
            console.log(place.formatted_address);
            console.log('lat: ', place.geometry.location.lat());
            console.log('lng:', place.geometry.location.lng());
        }
    }

    return (
        <div id="loc-search-container">
            <StandaloneSearchBox
                onLoad={ref => inputRef.current = ref}
                onPlacesChanged={placeChangeHandler}
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
                    if (!inputRef.current.getPlaces()) return;
                    const [place] = inputRef.current.getPlaces();
                    if (place) {
                        const payload = {
                            location: place.formatted_address,
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        };
                        dispatch(addLocation(payload));
                    }
                }}
                id="loc-submit-btn"
            >Submit</button>
        </div>
    );
};