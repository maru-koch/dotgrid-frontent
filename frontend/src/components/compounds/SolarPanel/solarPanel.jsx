import { SolarProjects } from '../../molecules'
import { SectionText, Section, SectionWrapper, SectionImage } from '../../elements'
import solar_panel from '../../../assets/images/solar_starter_pack.png'

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