import {useState} from 'react'
import { SelectPriceModel } from '../PriceModel'
import {  PriceCategories } from '../PriceCategories'

import { priceDetailsData } from '../../../constants'

export const Pricing =()=>{
    
    // Display categories based on the price model selected
    // categories is collection of all plans associated with the price model

    const [priceModel, setPriceModel] = useState('individual')
    return (
    <main>
        <SelectPriceModel priceModel = {priceModel} setPriceModel = {setPriceModel} description = {priceDetailsData[priceModel].description}/>
        <PriceCategories priceModel = {priceModel} data = {priceDetailsData[priceModel]}/>
    </main>
    )
}