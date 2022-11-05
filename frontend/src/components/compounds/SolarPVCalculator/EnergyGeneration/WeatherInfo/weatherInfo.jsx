
import {SectionContainer, Section } from "../../../../elements/Sections"


export const WeatherInfo =()=>{
    /*
    Displays information about the weather
    1. Wind and Pressure
        - Humidity
        - Ozone
        - Dew Point
        - 
    2. Sun
        - Intensity
        - 
     */
    return (
         <SectionContainer>
            <Section bg={{backgroundColor:'var(--primary-color)', minWidth:'100%', margin:'0px', padding:'0px' }}>
                <h1>Weather Info</h1>
            </Section>
        </SectionContainer>
    )
}