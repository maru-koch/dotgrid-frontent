import {useState} from 'react'
import { Section, SectionWrapper, Text } from '../../elements'
import {priceDetailsData} from '../../../constants'


const ChoosePriceModel =({setPriceModel})=>{

    // Selects price Model

    return (
        <Section>
            <SectionWrapper>
                <button onClick ={()=>setPriceModel("individual")}>Individual</button>
                <button onClick ={()=>setPriceModel("enterprise")}>Enterprise</button>
            </SectionWrapper>
        </Section>
    )
}
const PricingModel=({priceModel, setPriceModel})=>{

    // Displace description based on the selected model

    return (
        <main>
            <ChoosePriceModel setPriceModel = {setPriceModel}/>
            <Text text={priceDetailsData[priceModel].description}/>
        </main>
    )
}

const PricingCategories=({priceModel, pricingDetails})=>{
    return 
}

export const PriceCategory =()=>{
    const [priceModel, setPriceModel] = useState('individual')
    return (
    <main>
        <PricingModel priceModel = {priceModel} setPriceModel = {setPriceModel}/>
        <PricingCategories priceModel={priceModel}/>
    </main>
    )
}