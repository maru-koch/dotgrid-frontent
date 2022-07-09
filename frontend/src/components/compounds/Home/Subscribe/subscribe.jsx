
import {Section, SectionHeader, SectionContainer} from '../../../elements/Sections'

import classes from './subscribe.module.css'



export const Subscribe=(props)=>{  
    return (
    <Section>
        <SectionContainer style ={classes.section}>
            <SectionHeader title ="Subscribe to News Letter" subtitle = "Be the first to Know about Important Events in the Solar Energy Industry"/>
            <div className={classes.subscribe__container}>
                <div className={classes.subscribe__wrapper}>
                    <input type="text" placeholder = "Your Email"/>
                    <button>Sign up</button>
                </div>
            </div>
        </SectionContainer>
    </Section>)
}

