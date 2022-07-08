import classes from './headerDisplay.module.css'
import solar_image from '../../../../assets/images/solar_home.png'

export const HeaderDisplay=()=>{
    return (
        <section className ={classes.header__section}>
            <div className ={classes.header__wrapper}>
               <div className={classes.wave}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={classes.shape_fill}></path>
                    </svg>
                </div>
                <div className={classes.header__container}>
                    <div className={classes.header__panel}>
                        <div>
                            <h2>Mini-grid Management</h2>
                            <p>Smart Metering, Energy Analytics, and P2P Energy Sharing</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div className={classes.header__panel}>
                        <img className={classes.header__img} src = {solar_image} height = "100p%" width="100%"alt ="property_owner"/>
                    </div>
                </div>
            </div>
            
        </section>
    )
} 

