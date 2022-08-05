import {useState} from 'react'
import { SelectPriceModel } from './PriceModel'
import {  PriceCategories } from './PriceCategories'

import { priceDetailsData } from '../../../constants'
import { SectionHeader } from '../../elements'


export const Pricing =({openModal})=>{
    // getModelPlan - > updatePriceModel (in pricing) -> updatePriceModel (in PriceCategories)
    // Display categories based on the price model selected
    // categories is collection of all plans associated with the price model
    // priceModel is either individual for persons or enterprise for organizations

    const [ priceModel, setPriceModel ] = useState('individual')
  
    return (
    <main>
        <SectionHeader title="Choose Plan"/>
        <SelectPriceModel setPriceModel = {setPriceModel} description = {priceDetailsData[priceModel].description}/>
        <PriceCategories openModal ={openModal}  plans = {priceDetailsData[priceModel].plans} modelType ={priceModel}/>
    </main>
    )
}