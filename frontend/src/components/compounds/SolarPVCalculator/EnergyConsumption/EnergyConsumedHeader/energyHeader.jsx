import classes from './energyHeader.module.css'
import {Section,Button, SectionWrapper} from '../../../../elements'
const BG={
    backgroundColor:'width',
    width:'100%',
    padding:'40px 100px'
}
export const EnergyConsumedHeader=()=>{
    return (
        <Section>
            <SectionWrapper>
                <p id={classes.energyHeader__title}>Calculate the Amount of Energy Consumed per Day</p>
                <Button color="var(--accent-color)" text="Add Appliance" />
            </SectionWrapper>
        </Section>
    )
}