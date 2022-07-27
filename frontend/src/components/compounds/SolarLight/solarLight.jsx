
import { SectionWrapper, SectionImage, SectionHeader } from '../../elements'
import solar_panel from '../../../assets/images/dotgrid_solar_panel.png'



export const SolarLight=()=>{
    return(
        <SectionWrapper>
            <SectionHeader title = "Uninterrupted Power Supply" subtitle="Enjoy 24/7 Clean energy without environmental polutions"/>
            <SectionImage image={solar_panel}/>
        </SectionWrapper>
    )
}