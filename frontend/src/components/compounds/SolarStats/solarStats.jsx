
import classes from './solarStats.module.css';
import { statsData } from '../../../constants/statData'


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
export const SolarStats =()=>{
    return (
        <main className={classes.solarStat__container}>
            <section className={classes.solarStat__wrapper}>
                {statsData.map(stat =><Stat icon = {stat.icon} stat = {stat.metrics} title ={stat.title} desc={stat.description}/>)}
            </section>
        </main>
    )
}