import { createSlice } from "@reduxjs/toolkit";

const initialState = 'guest';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state = action.payload;
            console.log(state, ' just signed in');
            return state;
        }
    }
});

export const { logIn } = userSlice.actions;
export default userSlice.reducer;