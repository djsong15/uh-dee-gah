import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalLocsVisited: 0,
    totalLocsToVisit: 0,
    locList: [],
    lastLocId: 100
}

export const locSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        addLocation: (state, action) => {
            console.log(action);
            ++state.totalLocsToVisit;
            state.locList.push({
                locId: ++state.lastLocId,
                location: action.payload.location,
                visited: false,
                geoPos: {
                    lat: action.payload.lat,
                    lng: action.payload.lng,
                }
            });
        },
        visitedLocation: (state, action) => {
            for (const loc of state.locList) {
                if (action.payload === loc.locId) {
                    --state.totalLocsToVisit;
                    ++state.totalLocsVisited;
                    loc.visited = loc.visited ? false : true;
                }
            }
        },
        removeLocation: (state, action) => {
            for (let i = 0; i < state.locList.length; i++) {
                const loc = state.locList[i];
                if (action.payload === loc.locId) {
                    loc.visited ? --state.totalLocsVisited : -- state.totalLocsToVisit;
                    state.locList.splice(i, 1);
                }
            }
        }
    }
});

export const { addLocation, visitedLocation, removeLocation } = locSlice.actions;
export default locSlice.reducer;