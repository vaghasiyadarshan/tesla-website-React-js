import { creactSlice } from "@reduxjs/toolkit"
const initialState={
    cars:["MOdel S","Model X", "Mode Y","Model X"]
}

const creactSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})