import { Section, SectionWrapper } from "../../../../elements"

export const EnergyResult=({total})=>{
    return (
        <Section>
            <SectionWrapper>
                <p>Total Energy Consumed 'watt/per day'</p>
                <div><i></i></div>
                <p>{total}</p>
            </SectionWrapper>
        </Section>
    )
}