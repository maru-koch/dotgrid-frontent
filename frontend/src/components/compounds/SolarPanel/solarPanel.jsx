
import { SectionText, SectionWrapper, SectionImage } from '../../elements'
import solar_panel from '../../../assets/images/dotgrid_solar_panel.png'

const word ={
    title:'Get Your Solar PV',
    desc: `
                We are on a mission to empower home and business owners across Africa
                maximize their potentials. Epileptic power supply has hampered the growth of
                so many businesses and has made families grope in the dark. We are here to change that narative.
                Our vission is to make clean energy and power accessible by all.`,
    button_text: 'Order Solar PV Panel'
}

export const SolarPanel=()=>{
    return(
        <SectionWrapper>
            <SectionImage image={solar_panel}/>
            <SectionText 
                title ={word.title} 
                description ={word.desc}
                btn={true}
                btnText="Order Solar PV"/>
        </SectionWrapper>
    )
}