import {Section, SectionContainer, SectionImage} from '../../../elements'
import { EnergyConsumedHeader } from './EnergyConsumedHeader';
import { EnergyResult} from './EnergyResult';
import {useDispatch} from 'react-redux'
import { Appliances } from './Appliances';
import image from '../../../../assets/images/appliances.png'
import {APPLIANCE_ACTION} from '../../../../store/reducer/applianceReducer'
import {useMemo, useState, useEffect} from 'react'
import {useSelector} from 'react-redux'



const BG ={
   
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
    const appliances = useSelector(state =>state.appliance)
    const [show, setShowAppliances] = useState(false)
    const [btnTitle, setBtnTitle] = useState('Add Appliances')
    const dispatch = useDispatch()

    const func=()=>{
        if (appliances.length === 0){
            setShowAppliances(true)
            setBtnTitle("Clear Appliances")
        }else{
            dispatch(APPLIANCE_ACTION.clearAppliances())
        } 
    }


    return (
        <Section bg={{minWidth:"80vw"}}>
            <EnergyConsumedHeader func ={func} btnTitle={btnTitle}/>
            {
                show? <Appliances/> : <BlankImage/>
            }
        </Section>
    )
}