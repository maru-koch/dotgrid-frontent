import { Section, SectionWrapper, Text } from '../../../elements'

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
export const SelectPriceModel=({description, setPriceModel})=>{

    // Displays description based on the selected price model

    return (
        <main>
            <PriceModel setPriceModel = {setPriceModel}/>
            <Text text={description}/>
        </main>
    )
}

