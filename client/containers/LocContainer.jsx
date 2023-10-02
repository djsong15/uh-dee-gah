import React from "react";

import LocationSearch from "../components/LocationSearch.jsx";
import LocationList from "../components/LocationList.jsx";

export default function LocContainer(props) {
    return (
        <div className="container">
            <h2>Let's go somewhere!</h2>
            <div id="earth"></div>
            {props.isLoaded ? <LocationSearch /> : <div></div>}
            <LocationList />
        </div>
    );
}