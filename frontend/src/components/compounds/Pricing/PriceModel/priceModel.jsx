import {useState} from 'react'
import { Section, SectionWrapper, Text } from '../../elements'
import {priceDetailsData} from '../../../constants'


const PriceModel =({setPriceModel})=>{

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
export const SelectPriceModel=({priceModel, setPriceModel})=>{

    // Displace description based on the selected model

    return (
        <main>
            <PriceModel setPriceModel = {setPriceModel}/>
            <Text text={priceDetailsData[priceModel].description}/>
        </main>
    )
}

