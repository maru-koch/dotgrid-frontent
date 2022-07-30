import {useState} from 'react'
import { SelectPriceModel } from './PriceModel'
import {  PriceCategories } from './PriceCategories'

import { priceDetailsData } from '../../../constants'
import { SectionHeader } from '../../elements'

export const Pricing =()=>{
    
    // Display categories based on the price model selected
    // categories is collection of all plans associated with the price model

    const [ priceModel, setPriceModel ] = useState('individual')

    return (
    <main>
        <SectionHeader title="Choose Plan"/>
        <SelectPriceModel setPriceModel = {setPriceModel} description = {priceDetailsData[priceModel].description}/>
        <PriceCategories plans = {priceDetailsData[priceModel].plans}/>
    </main>
    )
}