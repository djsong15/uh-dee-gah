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
                location: action.payload,
                visited: false
            });
        },
        visitedLoc: (state, action) => {
            --state.totalLocsToVisit;
            ++state.totalLocsVisited;
            for (const loc of state.locList) {
                if (action.payload === loc.locId) {
                    loc.visited = true;
                }
            }
        }
    }
});

export const { addLocation, visitedLoc } = locSlice.actions;
export default locSlice.reducer;