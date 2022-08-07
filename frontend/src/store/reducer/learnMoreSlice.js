
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        image:"",
        description:{
            title: "",
            content: ""
        },
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
        }
    }
})

export const LEARNMORE_ACTIONS = learnMoreSlice.actions
export default learnMoreSlice.reducer