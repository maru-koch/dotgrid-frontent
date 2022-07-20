import { Section, SectionImage } from '../../elements'
import solar_analytics from '../../../assets/images/solar_analytics.png'


const SECTION_WRAPPER = {
    gap:'5px',
    backgroundColor: '#000'
}

export const SolarAnalytic = ()=>{
    return(
        <Section bg={{ backgroundColor:'#000'}}>
            <SectionImage image = {solar_analytics} height ="100%" width="100%" style={{width: '100%'}}/>
        </Section>
    )
}