import logo from '../../../assets/images/dotgrid_logo.png'
import classes from './logo.module.css'

export const Logo=({style})=>{

    // display the logo

    return (
        <div className={classes.logo__container}>
            <div className={`${classes.logo__wrapper} ${style}`}>
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}