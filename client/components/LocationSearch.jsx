import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLocation } from "../reducers/locations";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from "use-places-autocomplete";
import { Autocomplete, TextField } from "@mui/material";

export default function LocationSearch() {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete();
    const testOptions = [
        'Los Angeles',
        'San Francisco'
    ];

    return (
        <Autocomplete 
            id="location-combobox"
            options={testOptions}
            renderInput={(params) => <TextField {...params} label="places" />}
        />
    )
};