
import { useState } from 'react'
import { whyAnalyticsData as word } from '../../../constants/whyAnalyticsData'
import { ModalRequestDemo } from '../ModalRequestDemo'
import { Section, SectionText, SectionWrapper, SectionImage, SectionHeader} from '../../elements'
import analytics_phone from '../../../assets/images/smart_home.png'
import analytics_computer from '../../../assets/images/energy_optimization.png'

export const WhyAnalytics =()=>{

    // manager request demo forms and popup
    const [open, setOpen] = useState(false)
    const [msgSent, setMsgSent] = useState(false)
    const [requestDemo, setRequestDemo] = useState(false)

    const openModal=()=>{
        setOpen(true)
    }
    const closeModal=()=>{
        setOpen(false)
        setRequestDemo(false)
    }

    const requestDemoHandler =()=>{
         console.log('Demo requested')
         setRequestDemo(true)
         setTimeout(()=>{
            setMsgSent(true)
         }, 5000)
    }

  
    return(
        <Section>
            <SectionHeader title = "Why Dotgrid Analytics?" subtitle = ""/>
            <SectionWrapper>
                <SectionImage 
                    image={analytics_computer} 
                    height={'100%'} 
                    width={'100%'}
                    wrapperStyle={{height:600, width: 500}}
                    containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>
                <SectionText 
                    title ={word[0].title} 
                    description ={word[0].desc}
                    btn={true}
                    openModal={()=>openModal()}
                    btnText="Request Demo"/>
            </SectionWrapper>
         <SectionWrapper bg ={{backgroundColor:"#e6f3f8"}}>
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
                wrapperStyle={{height:500, width:'100%'}}
                containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>
        </SectionWrapper>
        <ModalRequestDemo
                open={open}
                msgSent={msgSent}
                closeModal={closeModal}
                requestDemo = {requestDemo}
                requestDemoHandler={requestDemoHandler}
            />

        </Section>
       
    )
}