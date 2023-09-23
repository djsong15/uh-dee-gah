import React from "react";
import { useDispatch } from "react-redux";
import { visitedLoc } from "../reducers/locations";

export default function Location(props) {
    const dispatch = useDispatch();

    return (
        <div className="list-item">
            <div>Location: {props.location}</div>
            <div>
                Visited? <button
                    onClick={() => dispatch(visitedLoc(props.location))}
                >{props.visited}</button>
            </div>
        </div>
    );
}