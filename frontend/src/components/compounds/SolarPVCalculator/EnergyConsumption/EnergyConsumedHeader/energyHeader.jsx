import classes from './energyHeader.module.css'
import { useDispatch}from 'react-redux'
import {Section,Button, SectionWrapper} from '../../../../elements'

import {APPLIANCE_ACTION} from '../../../../../store/reducer/applianceReducer'

const BG={
    backgroundColor:'width',
    width:'100%',
    padding:'40px 100px'
}

const appliance ={
    id:0,
    quantity:1, 
    watt:0, 
    hrPerDay:0, 
    wattHour:0
    }

export const EnergyConsumedHeader=()=>{

    // Holds the add appliance button 

    const dispatch = useDispatch();

    const addAppliance = ()=>{
        dispatch(APPLIANCE_ACTION.addAppliance(appliance))
    }

    return (
        <Section>
            <SectionWrapper>
                <p id={classes.energyHeader__title}>Calculate the Amount of Energy Consumed per Day</p>
                <Button onClick={()=>addAppliance()} color="var(--accent-color)" text="Add Appliance" />
            </SectionWrapper>
        </Section>
    )
}

