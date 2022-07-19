
import { SectionText, SectionWrapper, SectionImage } from '../../elements'
import solar_panel from '../../../assets/images/dotgrid_solar_panel.png'

const word ={
    title:'Section Title',
    description: '',
    button_text: 'Order Solar PV Panel'
}

export const SolarPanel=()=>{
    return(
        <SectionWrapper>
            <SectionImage image={solar_panel}/>
            <SectionText title ={word.title} description ={word.desc}/>
        </SectionWrapper>
    )
}