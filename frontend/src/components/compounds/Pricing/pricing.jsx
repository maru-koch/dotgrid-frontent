import {useState} from 'react'
import { SelectPriceModel } from './PriceModel'
import {  PriceCategories } from './PriceCategories'

import { priceDetailsData } from '../../../constants'
import { SectionHeader } from '../../elements'

const initialValues =  {   
            priceModel:'',
            price: '',
            features: []
        }

export const Pricing =({getModelPlan})=>{
    
    // Display categories based on the price model selected
    // categories is collection of all plans associated with the price model
    // priceModel is either individual for persons or enterprise for organizations

    const [ priceModel, setPriceModel ] = useState('individual')
    const [modelPlan, setModelPlan] = useState(initialValues)

    const updateModelPlan=(newModelPlan)=>{
        // updates the features based on the price model selected by users
        setModelPlan({...modelPlan, newModelPlan})
        getModelPlan(modelPlan)
    }

    return (
    <main>
        <SectionHeader title="Choose Plan"/>
        <SelectPriceModel setPriceModel = {setPriceModel} description = {priceDetailsData[priceModel].description}/>
        <PriceCategories updateModelPlan ={updateModelPlan} plans = {priceDetailsData[priceModel].plans}/>
    </main>
    )
}