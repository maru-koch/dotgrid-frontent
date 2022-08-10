import {Section} from '../../../elements'
import { EnergyHeader } from '../EnergyHeader';
import { EnergyResult} from './EnergyResult';
import { Appliances } from './Appliances';


export const EnergyConsumed=()=>{
    return (
        <Section>
            <EnergyHeader/>
            <Appliances/>
            <EnergyResult/>
        </Section>
    )
}