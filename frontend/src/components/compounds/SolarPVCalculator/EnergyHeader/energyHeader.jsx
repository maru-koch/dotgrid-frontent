import classes from './energyHeader.module.css'
import {Section, SectionWrapper} from '../../../elements'
const BG={
    backgroundColor:'green',
    width:'100%',
}
export const EnergyHeader=()=>{
    return (
        <Section bg={{...BG}}>
            <SectionWrapper>
                <p>Calculate the Amount of Energy Consumed per Day</p>
                <i className="fa fa-bolt"></i>
            </SectionWrapper>
        </Section>
    )
}