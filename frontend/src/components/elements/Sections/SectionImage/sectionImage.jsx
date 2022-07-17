
import starter_image from '../../../assets/images/solar_starter_pack.png';
import classes from './starterImage.module.css';
import {Button} from '../../elements'

export const SectionImage=()=>{
    return(
        <div className ={classes.starter__container}>
            <div className ={classes.starter__wrapper}>
                <img src={starter_image} alt="Starter pack"/>
                <div className ={classes.starter__btn_wrapper}>
                     <Button text ="Get Solar Pack" />
                </div>
            </div>
        </div>
    )
}