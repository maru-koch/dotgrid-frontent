
import classes from './solarStat.module.css';
import { statsData } from '../../../constants/statData'
import { SectionWrapper, Section, SectionText } from '../../elements';


const Stat =({icon, stat, title, description})=>{
    return (
        <main className={classes.stat__container}>
            <section className={classes.stat__container}>
                <i className={icon}></i>
                <h2>{stat}</h2>
                <p>{description}</p>
            </section>
        </main>
    )
}
export const SolarStat =()=>{
    return (
        <main className={classes.solarStat__container} >
            <section className={classes.solarStat__wrapper}>
                {statsData.map(stat =><Stat icon = {stat.icon} stat = {stat.metrics} title ={stat.title} desc={stat.description}/>)}
            </section>
        </main>
    )
}