import {useState} from 'react'
import { SelectPriceModel, PriceCategories} from '../Pricing'
import {priceDetailsData} from '../../../constants'

export const Pricing =()=>{
    
    // Display categories based on the price model selected

    const [priceModel, setPriceModel] = useState('individual')
    return (
    <main>
        <SelectPriceModel priceModel = {priceModel} setPriceModel = {setPriceModel}/>
        <PriceCategories priceModel = {priceModel} data = {priceDetailsData[priceModel]}/>
    </main>
    )
}