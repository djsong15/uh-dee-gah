import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Location from "./Location.jsx";

const LocList = function ({ locList }) {
    if (!locList.length) return;
    return (
        <div>
            {locList.map((el ,i) => {
                return <Location
                    key={i}
                    locId={el.locId}
                    location={el.location}
                    visited={() => el.visited ? 'Yes' : 'No'}
                />;
            })}
        </div>
    );
}

export default function LocationList() {
    const locList = useSelector(state => state.locations.locList);

    return (
        <div id="locList">
            <h4>Places</h4>
            <LocList locList={locList}/>
        </div>
    );
}