

import { SectionHeader, Section, SectionWrapper } from '../../../elements/Sections'
import classes from './offGrid.module.css'
import image from '../../../../assets/images/mini-grid.png'


export const OffGrid2=()=>{ 
    return (
    <Section>
        <SectionHeader title = "" subtitle = ""/>
        <div className="section__wrapper">
            <SectionWrapper>
                <div className ={classes.offGrid__container}>
                   
                    <div className = {classes.card}>
                        <div className = {classes.cardWrapper}>
                            <h2>Mini-Grid Utility Services</h2>
                            <p>
                                Dotgrid offers robust tools and services for 
                                implementing profitable off-grid utility projects. 
                                We act as lead developer or work in partnership with 
                                energy providers and governments to integrate our 
                                platform into new projects, as a retrofit for 
                                existing mini-grids, or at the edge of the national 
                                grid to create more efficient and resilient energy 
                                infrastructure
                            </p>
                        </div>
                        <div className = {classes.btn_holder}>
                            <button>Learn More</button>
                        </div>
                    </div>
                     <div>
                        <div className ={classes.right}>
                            <img src = {image} alt = "side"/>
                        </div>
                    </div>
                </div>
        </SectionWrapper>
        </div>
    </Section>)
}

