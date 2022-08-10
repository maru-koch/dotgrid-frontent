import {Section} from '../../../../elements'
import {useState } from 'react'

const ApplianceHeader =()=>
    <main>
        <p>Name of Appliance</p>
        <p>Qnt</p>
        <p>Watt</p>
        <p>He/Day</p>
        <p>Wh/D</p>
    </main>

export const Appliances=()=>{
    const [appliances, setAppliances] = useState([0])
    return (
        <Section>
            {/* <ApplianceHeader/>
            <SectionContainer>
                {appliances.map(()=><Appliance/>)}
            </SectionContainer>
            <EnergyResult> */}
            <p>appliances</p>
        </Section>
    )
}