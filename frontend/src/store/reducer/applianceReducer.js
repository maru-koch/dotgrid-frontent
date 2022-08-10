import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id:1,
    quantity:2, 
    watt:12, 
    hrPerDay:3,
    wattHour: 0 
    }]

export const ApplianceSlice=createSlice({
    name: 'appliance',
    initialState,
    reducers:{
        addAppliance:(state, action)=>{
            state.push(action.payload);
        },
        removeAppliance:(state, action)=>{
            state.filter((appliance)=> appliance.id === action.payload.id)
        }
    }
})

export const APPLIANCE_ACTION = ApplianceSlice.actions
export default ApplianceSlice.reducer