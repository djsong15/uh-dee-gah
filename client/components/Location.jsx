import React from "react";
import { useDispatch } from "react-redux";
import { visitedLoc, removeLoc } from "../reducers/locations";

export default function Location(props) {
    const dispatch = useDispatch();

    return (
        <div className="list-item">
            <div><strong>Location:</strong> {props.location}</div>
            <div>
                <strong>Visited?</strong> <button
                    onClick={() => dispatch(visitedLoc(props.locId))}
                    id="visited-btn"
                >{props.visited ? 'Yes' : 'No'}</button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(removeLoc(props.locId))}
                >Remove?</button>
            </div>
        </div>
    );
}