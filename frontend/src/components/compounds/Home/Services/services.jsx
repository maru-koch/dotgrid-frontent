
import {SectionContainer, SectionHeader, SectionWrapper} from '../../../elements/Sections'
import classes from './services.module.css'
import { CardItem } from './cardItem'

const steps = [
        {icon: "fas fa-solar-panel", title: 'Installation', desc :'Order and get your Solar panel installed by our energy professionals', text: "Learn More"},
        {icon: 'fas fa-weight-scale', title: 'Smart Metering', desc :'Monitor your energy consumption in real-time via mobile app or web', text: "Learn More"},
        {icon: 'fas fa-chart-line', title: 'Solar Analytics', desc :'With our AI power analytics, track your Energy consumption patterns', text: "Learn More"},      
]

export const Services =()=>{
    return(
        <section className={classes.section}>
            <SectionHeader title ="What We do" subtitle ="We make Solar Energy accessible and cheap"/>
            <SectionContainer>
                <SectionWrapper style = {classes.wrapper}>
                    {steps.map((step, idx)=>
                        <CardItem key={idx} icon = {step.icon} title = {step.title} desc = {step.desc} btn = {step.text}/>
                    )}
                </SectionWrapper>
            </SectionContainer>
        </section>
    )
}

