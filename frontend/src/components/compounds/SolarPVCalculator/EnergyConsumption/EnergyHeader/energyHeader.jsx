import classes from './energyHeader.module.css'

export const EnergyHeader=()=>{
    return (
        <main className={classes.energyHeader__container}>
            <section className={classes.energyHeader__container}>
                <p>Calculate the Amount of Energy Consumed per Day</p>
                <i className="fa fa-bolt"></i>
            </section>
        </main>
    )
}