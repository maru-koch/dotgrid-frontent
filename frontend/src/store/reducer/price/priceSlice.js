
import {createSlice} from '@reduxjs/toolkit'

const initialState =  {   
            priceModel:'',
            price: '',
            features: [],
            modelType:''
        }

const priceSlice = createSlice({

    name: 'price',
    initialState,
    reducers:{
        setPriceModel: (state, action) => {
            state.priceModel = action.payload.priceModel
            state.price = action.payload.price
            state.features = action.payload.features
            state.modelType = action.payload.modelType
            console.log('store', state)
            
        },
    }

})

export const PRICE_ACTIONS = priceSlice.actions;
export default priceSlice.reducer