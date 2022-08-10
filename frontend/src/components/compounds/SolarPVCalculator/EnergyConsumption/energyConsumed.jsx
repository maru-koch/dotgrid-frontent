import {Section} from '../../../elements'
import { EnergyHeader, EnergyResult, Appliances } from '../EnergyConsumption'

export const EnergyConsumed=()=>{
    return (
        <Section>
            <EnergyHeader/>
            <Appliances/>
            <EnergyResult/>
        </Section>
    )
}