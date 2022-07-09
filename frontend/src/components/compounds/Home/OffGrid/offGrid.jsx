

import { SectionHeader, Section, SectionWrapper } from '../../../elements/Sections'
import { Card}from '../../../elements/Card'
import classes from './offGrid.module.css'
import image from '../../../../assets/images/off-grid.png'


export const OffGrid=()=>{ 
    return (
    <Section>
        <SectionHeader title = "" subtitle = ""/>
        <div className="section__wrapper">
            <SectionWrapper>
                <div className ={classes.offGrid__container}>
                    <div>
                        <div className ={classes.right}>
                            <img src = {image} alt = "side"/>
                        </div>
                    </div>
                    <div className = {classes.card}>
                        <div className = {classes.cardWrapper}>
                            <h2>Energy Access and Monitoring</h2>
                            <p className={classes.word}>
                                We enable communities, Estates, 
                                businesses access Stable and reliable energy.
                                Our Model provides a framework that enables our customers
                                have affordable energy at a minimal cost through a Pay-as-you plan.
                            </p>
                        </div>
                        <div className = {classes.btn_holder}>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
        </SectionWrapper>
        </div>
    </Section>)
}

