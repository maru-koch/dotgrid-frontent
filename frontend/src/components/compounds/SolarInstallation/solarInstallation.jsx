import { SolarProjects } from '../../molecules'
import { SectionText, Section, SectionWrapper } from '../../compounds'
import solar_panel from '../../../assets/images/solar_panel.png'

const word ={
    title:'Section Title',
    description: '',
    button_text: 'Order Solar PV Panel'
}

export const SolarInstallation=()=>{
    return(
        <Section>
            <SectionWrapper>
                <Image image={solar_panel}/>
                <SectionText title ={word.title} description ={word.desc}/>
            </SectionWrapper>
            <SolarProjects/>
        </Section>
    )
}