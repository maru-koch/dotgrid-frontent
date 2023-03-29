
import { useState } from 'react'
import { whyAnalyticsData as word } from '../../../constants/whyAnalyticsData'
import { ModalRequestDemo } from '../ModalRequestDemo'
import { Section, SectionText, SectionWrapper, SectionImage, SectionHeader} from '../../elements'
import analytics_phone from '../../../assets/images/smart_home.png'
import analytics_computer from '../../../assets/images/energy_optimization.png'

export const WhyAnalytics =()=>{

    // manager request demo forms and popup
    const [open, setOpen] = useState(false)
 
    const openModal=()=>{
        setOpen(true)
    }
    
    return(
        <Section>
            <SectionHeader title = "Why Dotgrid Analytics?" subtitle = ""/>

             {/* SECTION 1 */}

            <SectionWrapper bg="flex flex-wrap flex-col justify-center md:justify-evenly md:flex-row">
                <SectionImage 
                    image={analytics_computer} 
                    height={'100%'} 
                    width={'100%'}/>
                <SectionText 
                    title ={word[0].title} 
                    description ={word[0].desc}
                    btn={true}
                    openModal={()=>openModal()}
                    btnText="Request Demo"/>
            </SectionWrapper>

            {/* SECTION 2 */}

            <SectionWrapper>
                <SectionText 
                    title ={word[1].title} 
                    description ={word[1].desc}
                    btn={true}
                    openModal={()=>openModal()}
                    btnText="Request Demo"/>

                <SectionImage 
                    image={analytics_phone} 
                    height={'100%'} 
                    width={'70%'}
                    />
                    
            </SectionWrapper>
            <ModalRequestDemo open={open}/>

        </Section>
       
    )
}