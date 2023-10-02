import React from "react";
import { useSelector } from "react-redux";

import Location from "./Location.jsx";

export default function LocationList(props) {
    const locList = useSelector(state => state.locations.locList);

    return (
        <div id="loc-list">
            <h3 style={{color: 'white'}}>Places</h3>
            {locList.length ? (
                <div>
                    {locList.map((el ,i) => {
                        return <Location
                            key={i}
                            locId={el.locId}
                            location={el.location}
                            visited={el.visited}
                        />;
                    })}
                </div>
            ) : <div></div>}
        </div>
    );
}