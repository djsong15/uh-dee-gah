import React from "react";
import { useDispatch } from "react-redux";
import { visitedLocation, removeLocation } from "../reducers/locations";

export default function Location(props) {
    const dispatch = useDispatch();

    return (
        <div className="list-item">
            <div><strong>Location:</strong> {props.location}</div>
            <div>
                <strong>Visited?</strong> <button
                    onClick={() => dispatch(visitedLocation(props.locId))}
                    id="visited-btn"
                >{props.visited ? 'Yes' : 'No'}</button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(removeLocation(props.locId))}
                >Remove?</button>
            </div>
        </div>
    );
}