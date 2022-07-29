import {useState} from 'react'
import { Section, SectionWrapper, Text } from '../../elements'


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

    // Displace a test based on the selected model

    return (
        <main>
            <ChoosePriceModel setPriceModel = {setPriceModel}/>
            {priceModel === "individual"?<Text />: <Text />}
            <Text/>
        </main>
    )
}

const PricingCategories=({priceModel, pricingDetails})=>{

}

export const PricingCategory =()=>{
    const [priceModel, setPriceModel] = useState('individual')
    return (
    <main>
        <PricingModel priceModel = {priceModel} setPriceModel = {setPriceModel}/>
        <PricingCategories/>
    </main>
    )
}