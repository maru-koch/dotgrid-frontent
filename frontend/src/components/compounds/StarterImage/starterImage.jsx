
import starter_image from '../../../assets/images/solar_starter_pack.png';
import classes from './starterImage.module.css';

export const StarterImage=()=>{
    return(
        <div className ={classes.starter__container}>
            <div className ={classes.starter__wrapper}>
                <img src={starter_image} alt="Starter pack"/>
            </div>
        </div>
    )
}