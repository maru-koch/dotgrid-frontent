import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const ApplianceSlice=createSlice({
    name: 'appliance',
    initialState,
    reducers:{
        addAppliance:(state, action)=>{
            state.push(action.payload);
        },
        removeAppliance:(state, action)=>{
            state.filter((appliance, idx)=> appliance.id === action.payload.id)
        }
    }
})

export const APPLIANCE_ACTION = ApplianceSlice.actions
export default ApplianceSlice.reducer