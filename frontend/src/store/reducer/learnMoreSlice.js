
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        image:"",
        title: "",
        description: "",
        sections:{
            1:{
                heading:"",
                image:"",
                content:""
            },
            2:{
                heading:"",
                image:"",
                content:""
            },
            3:{
                heading:"",
                image:"",
                content:""
            }
        }
    }

export const learnMoreSlice = createSlice({
    name: 'learnMore',
    initialState,
    reducers:{
        updateLearMore:(state, action)=>{
            state = {...action.payload}
            console.log("store")
        }
    }
})

export const LEARNMORE_ACTIONS = learnMoreSlice.actions
export default learnMoreSlice.reducer