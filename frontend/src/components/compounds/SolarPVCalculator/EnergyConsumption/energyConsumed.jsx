import {Section, SectionContainer, SectionImage} from '../../../elements'
import { EnergyConsumedHeader } from './EnergyConsumedHeader';
import { EnergyResult} from './EnergyResult';
import { Appliances } from './Appliances';
import image from '../../../../assets/images/appliances.png'
const BG ={
    marginTop:"50px",
    height: '400px',
    width: '400px'
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
export const EnergyConsumed=({addItem, energy=[]})=>{
    return (
        <Section>
            <EnergyConsumedHeader addItem ={addItem} />
            {
                energy[0]? <Appliances/> : <BlankImage/>
            }
            <EnergyResult/>
        </Section>
    )
}