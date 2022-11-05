
import {SectionContainer, Section } from "../../../elements/Sections"


export const PanelDetails =()=>{
    /*
    Display the input component for user to enter the solar panel details.
    The information to be provided by the user includes;
    1. Total Panel Power
    2. Total Inverter Power
    3. Efficiency Factor
    4. Tilt angle
    5. Azimuth
    
     */
    return (
         <SectionContainer>
            <Section bg={{backgroundColor:'var(--primary-color)', minWidth:'100%', margin:'0px', padding:'0px' }}>
                <h1>Panel Details</h1>
            </Section>
        </SectionContainer>
    )
}