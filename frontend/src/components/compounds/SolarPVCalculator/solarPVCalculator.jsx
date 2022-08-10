import { useState } from 'react';
import { Section, SectionContainer, SectionWrapper, Button } from '../../elements';
import { EnergyConsumed } from "./EnergyConsumption";


export const SolarPVCalculator =()=>{
    const [energy, setEnergy] = useState("consumed")


    return (
        <Section>
            <SelectEnergy setEnergy={setEnergy}/>
            <SectionContainer>
                {energy = "consumed"? <EnergyConsumed/>:""}
            </SectionContainer>
        </Section>
    )
}