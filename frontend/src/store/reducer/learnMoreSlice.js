
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
        updateLearnMore:(state, action)=>{
            state.image = action.payload.image
            state.description = action.payload.description
            state.title = action.payload.title
            state.sections = action.payload.sections
            console.log('state', state)
        }
    }
})

export const LEARNMORE_ACTIONS = learnMoreSlice.actions
export default learnMoreSlice.reducer