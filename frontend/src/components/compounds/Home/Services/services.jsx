
import {SectionContainer, SectionHeader, SectionWrapper} from '../../../elements/Section'
import classes from './services.module.css'
import { CardItem } from './cardItem'

const steps = [
        {icon: "fas fa-solar-panel", title: 'Installation', desc :'Choose location of your choice and find the best listed properties in that area', text: "Search Homes"},
        {icon: 'fas fa-weight-scale', title: 'Smart Metering', desc :'Browse Shops, Event centers, houses, and rooms from our large rental network', text: "See Your Options"},
        {icon: 'fas fa-chart-line', title: 'Solar Analytics', desc :'Sell your Property effortlessly without hassles. Explore brokers for a juicy deal', text: "Find Rentals"},      
]

export const Services =()=>{
    return(
        <section>
            <SectionHeader title ="Exclusive Properties" subtitle ="Your dream home is a finger tip away"/>
            <SectionContainer>
                <SectionWrapper style = {classes.wrapper}>
                    {steps.map(step =>
                        <CardItem icon = {step.icon} title = {step.title} desc = {step.desc} btn = {step.text}/>
                    )}
                </SectionWrapper>
            </SectionContainer>
        </section>
    )
}

