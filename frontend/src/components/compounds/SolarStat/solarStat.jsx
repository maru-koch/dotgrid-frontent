
import classes from './solarStat.module.css';
import { statsData } from '../../../constants/statData'
import { SectionWrapper, Section, SectionText } from '../../elements';


const Stat =({icon, title, desc})=>{
    return (
        <main className={classes.stat__container}>
            <section className={classes.stat__wrapper}>
                <i className={icon}></i>
                <h2>{title}</h2>
                <p>{desc}</p>
            </section>
        </main>
    )
}
export const SolarStat =()=>{
    return (
        <main className={classes.solarStat__container} >
            <section className={classes.solarStat__wrapper}>
                {statsData.map(stat =><Stat icon = {stat.icon} title ={stat.title} desc={stat.description}/>)}
            </section>
        </main>
    )
}