import React from "react";

import LocationSearch from "../components/LocationSearch.jsx";
import LocationList from "../components/LocationList.jsx";

export default function LocContainer(props) {
    return (
        <div className="container">
            <h2>i'm container 2, bro</h2>
            {props.isLoaded ? <LocationSearch /> : <div></div>}
            <LocationList flipMSwitch={props.flipMSwitch} />
        </div>
    );
}