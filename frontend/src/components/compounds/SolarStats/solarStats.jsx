
import { useNavigate } from 'react-router-dom';
import {SolarStat} from '../SolarStat';
import { SectionHeader, SectionWrapper } from '../../elements/Sections';
import classes from './solarStats.module.css';



export const SolarStats=()=>{ 
    const navigate = useNavigate()
    return (
    <div className={classes.sectionWrapper}>
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
                            <h2>Enterprise Mini-grid Solutions</h2>
                            <p className={classes.word}>
                                Dotgrid Analytics and automation enables City, Estates, 
                                and community  managers to monitor and track energy consumption of building or appartments
                                connected to their grids.<br/>
                                Dotgrid provides a dedicated dashboard to manage energy data and provides insight for analysis and reporting.
                            </p>
                        </div>
                        <div className = "flex justify-center">
                            <button className="bg-yellow-600" onClick={()=>navigate("/contact")}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
    </div>)
}

