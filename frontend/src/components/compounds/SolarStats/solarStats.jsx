
import {SolarStat} from '../SolarStat'
import { SectionHeader, Section, SectionWrapper } from '../../elements/Sections'
import bg_img from '../../../assets/images/solar_farm.jpg'
import classes from './solarStats.module.css'


export const SolarStats=()=>{ 
    return (
    <Section bg = {{ backgroundImage: `url(${bg_img})`, backgroundSize:'cover',}}>
        <SectionHeader title = "" subtitle = ""/>
            <SectionWrapper >
                <div className ={classes.offGrid__container}>
                    <div>
                        <div className ={classes.right}>
                            <SolarStat/>
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
    </Section>)
}

