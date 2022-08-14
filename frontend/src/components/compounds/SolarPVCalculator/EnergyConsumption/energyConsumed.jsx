import {Section, SectionContainer, SectionImage} from '../../../elements'
import { EnergyConsumedHeader } from './EnergyConsumedHeader';
import { EnergyResult} from './EnergyResult';
import { Appliances } from './Appliances';
import image from '../../../../assets/images/appliances.png'

import {useMemo, useState} from 'react'
import {useSelector} from 'react-redux'



const BG ={
    marginTop:"50px",
    height: '400px',
    minWidth: '80vw'
}

const BlankImage=()=>{
    return (
        <SectionContainer>
            <Section bg ={{...BG}}>
                <h1 style ={{textAlign:'center', fontSize:'1rem', padding:'20px'}}>You have not added any appliance</h1>
                <SectionImage 
                    height ="100%" 
                    width="100%" 
                    image={image}
                    containerStyle={{...BG}}/>
                </Section>
        </SectionContainer>
    )
}

export const EnergyConsumed=({addItem})=>{

    // contains all components related to energy consumption

    const applianceList = useSelector(state =>state.appliance)
    const [appliances, setAppliances] = useState([])

    useMemo(()=>{
        setAppliances(applianceList)
    }, [applianceList])

    return (
        <Section bg={{minWidth:"80vw"}}>
            <EnergyConsumedHeader/>
            {
                appliances[0]? <Appliances appliances={appliances}/> : <BlankImage/>
            }
            <EnergyResult/>
        </Section>
    )
}