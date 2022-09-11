import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const ApplianceSlice=createSlice({
    name: 'appliance',
    initialState,
    reducers:{

        addAppliance:(state, action)=>{
            // add a new appliance
            state.push(action.payload);
        },

        removeAppliance:(state, action)=>{
            // remove an appliance by Id
            state.pop(action.payload.id)
        },
        clearAppliances:(state, action)=>{
            // removes all appliances from the list
            state.splice(0, state.length)
        }
    }
})

export const APPLIANCE_ACTION = ApplianceSlice.actions
export default ApplianceSlice.reducer