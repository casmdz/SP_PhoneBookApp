// a slice is a piece of data
import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        first_name: "First Name",
        // first: "First Name",
        last: "Last Name",
        email: "Email",
        phone_number: "Phone Number",
        // address: "Address",
        username: "Username",

    },
    reducers: {
        //action is submitted elsewhere - written to state.name
        //attatching functions to places, pass to specific variables, overwrite as an object, and eventually submits the data to the db
        chooseFirstName: (state, action) => { state.first_name = action.payload},
        // chooseFirst: (state, action) => { state.first = action.payload},
        chooseLast: (state, action) => { state.last = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        choosePhone: (state, action) => { state.phone_number = action.payload},
        // chooseAddress: (state, action) => { state.address = action.payload}
        chooseUsername: (state, action) => { state.username = action.payload}
    }
})

export const reducer = rootSlice.reducer;
 //                chooseFirst                                                   chooseAddress 
export const { chooseFirstName , chooseLast, chooseEmail, choosePhone, chooseUsername} = rootSlice.actions