import classes from './headerDisplay.module.css'
import solar_image from '../../../../assets/images/solarAnalyticHeader.png'
import { useNavigate, Link } from 'react-router-dom'

export const HeaderDisplay=()=>{
    const navigate = useNavigate()
    return (
        <section className ={classes.header__section}>
            <div className ={classes.header__wrapper}>
                <div className={classes.header__panel}>
                    <div className={classes.header__panel_left}>
                        <h1>AI POWERED</h1>
                        <h2>Solar Analytics and Automation</h2>
                        <button className={classes.btn} onClick={()=>navigate('/get-started')}>Get Started</button>
                    </div>
                </div>
                <div className={classes.header__panel}>
                    <div className={classes.header__panel_right}>
                        <img className={classes.header__img} src={solar_image} alt="header"/>
                    </div>
                </div>
            </div>
        </section>
    )
} 

