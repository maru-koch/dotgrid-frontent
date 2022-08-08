
import {Section, SectionHeader, SectionWrapper} from '../../../elements/Sections'
import classes from './services.module.css'
import { CardItem } from './cardItem'

const steps = [
    {icon: 'fas fa-chart-line', name:'analytics', title: 'Solar Analytics', desc :'With our AI power analytics, track your Energy consumption patterns', text: "Learn More"},      
    {icon: 'fas fa-weight-scale', name:'smartMeter', title: 'Smart Metering', desc :'Monitor your energy consumption in real-time via mobile app or web', text: "Learn More"},
    {icon: "fas fa-solar-panel", name:'automation', title: 'Energy Automation', desc :'Automate your home appliances energy consumptiion.', text: "Learn More"},
        
]


export const Services =()=>{
  
    return(
        <section className={classes.section}>
            <SectionHeader title ="What We do" subtitle ="We make Solar Energy accessible and cheap"/>
            <Section>
                <SectionWrapper bg = {{gap: '50px', padding: '50px 0'}}>
                    {steps.map((step, idx)=>
                        <CardItem key={idx} 
                            icon = {step.icon} 
                            title = {step.title} 
                            desc = {step.desc} 
                            btn = {step.text} 
                            name ={step.name} 
                           />
                    )}
                </SectionWrapper>
            </Section>
        </section>
    )
}

