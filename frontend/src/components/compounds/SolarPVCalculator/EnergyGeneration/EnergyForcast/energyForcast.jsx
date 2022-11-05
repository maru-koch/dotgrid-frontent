
import {SectionContainer, Section } from "../../../../elements/Sections"


export const EnergyForcast =()=>{
    /*
    This component displays a Tab panels that shows;
    1. Solar Panel Details - ()
    2. Weather Info
    3. Energy Forcast
     */
    return (
         <SectionContainer>
            <Section bg={{backgroundColor:'var(--primary-color)', minWidth:'100%', margin:'0px', padding:'0px' }}>
                <h1>Energy Forcast</h1>
            </Section>
        </SectionContainer>
    )
}