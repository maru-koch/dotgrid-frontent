
import { SectionWrapper, SectionImage, SectionHeader } from '../../elements'
import solar_bulb from '../../../assets/images/solar_bulb.jpeg'


export const SolarLight=()=>{
    return(
        <SectionWrapper>
            <SectionHeader title = "Uninterrupted Power Supply" subtitle="Enjoy 24/7 Clean energy without environmental polutions"/>
            <SectionImage image={solar_bulb}/>
        </SectionWrapper>
    )
}