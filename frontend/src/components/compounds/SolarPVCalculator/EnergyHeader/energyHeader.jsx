import classes from './energyHeader.module.css'
import {Section, SectionWrapper} from '../../../elements'
const BG={
    backgroundColor:'width',
    width:'100%',
    padding:'40px 100px'
}
export const EnergyHeader=()=>{
    return (
        <Section bg={{...BG}}>
            <SectionWrapper>
                <p id={classes.energyHeader__title}></p>
                <i id ={classes.energyHeader__icon} className="fa fa-bolt"></i>
            </SectionWrapper>
        </Section>
    )
}