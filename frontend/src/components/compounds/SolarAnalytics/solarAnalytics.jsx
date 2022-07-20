import { Section, SectionHeader, SectionImage } from '../../elements'
import solar_analytics from '../../../assets/images/solar_analytics.png'


const SECTION_WRAPPER = {
    gap:'5px',
    backgroundColor: '#000'
}

export const SolarAnalytics = ()=>{
    return(
        <Section>
            <SectionHeader title="Our Portforlio" subtitle ="The projects we have executed"/>
            <SectionImage image = {solar_analytics}/>
        </Section>
    )
}