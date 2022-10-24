import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface StateProps {
    username: string;
}

const initialState: StateProps = {
    username: localStorage.getItem("username") || "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
            localStorage.setItem("username", action.payload);
        },
    },
});

const userReducer = userSlice.reducer;

export const userActions = { ...userSlice.actions};

export default userReducer;
