import logo from '../../../assets/images/dotgrid_logo.png'
import classes from './logo'

export const Logo=({height, width})=>{
    // display the logo
    return (
        <div className={classes.logo__container}>
            <div className={classes.logo__wrapper}>
                <img src={logo} alt="logo" heigth={height} width={width}/>
            </div>
        </div>
    )
}