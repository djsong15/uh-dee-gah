import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalLocsVisited: 0,
    // totalLocsToVisit: 0,
    locList: [],
    lastLocId: 100
}

export const locSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        addLocation: (state, action) => {
            console.log(action);
            // ++state.totalLocsToVisit;
            state.locList.push({
                locId: ++state.lastLocId,
                location: action.payload.location,
                visited: false,
                geoPos: {
                    lat: action.payload.lat,
                    lng: action.payload.lng,
                }
            });
            fetch('/db/placesList', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    placesList: state.locList
                })
            })
        },
        visitedLocation: (state, action) => {
            for (const loc of state.locList) {
                if (action.payload === loc.locId) {
                    // --state.totalLocsToVisit;
                    loc.visited = loc.visited ? false : true;
                    loc.visited ? ++state.totalLocsVisited : --state.totalLocsVisited;
                    loc.visited ? console.log('we visited', loc.location) : console.log('we unvisited', loc.location);
                }
            }
            fetch('/db/placesList', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    placesList: state.locList
                })
            });
        },
        removeLocation: (state, action) => {
            for (let i = 0; i < state.locList.length; i++) {
                const loc = state.locList[i];
                if (action.payload === loc.locId) {
                    if (loc.visited) --state.totalLocsVisited;
                    state.locList.splice(i, 1);
                }
            }
            fetch('/db/placesList', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    placesList: state.locList
                })
            })
        },
        loggedIn: (state, action) => {
            // console.log('loggedin reducer', action.payload);
            const { placesList } = action.payload;
            console.log('i got the list!', placesList);
            state.locList = placesList;
            for (const loc of state.locList) {
                if (loc.visited) ++state.totalLocsVisited;
                // else ++state.totalLocsToVisit;
            }
            state.lastLocId = state.locList[state.locList.length - 1]?.locId;
            if (!state.lastLocId) state.lastLocId = 100;
        }
    }
});

export const { addLocation, visitedLocation, removeLocation, loggedIn } = locSlice.actions;
export default locSlice.reducer;