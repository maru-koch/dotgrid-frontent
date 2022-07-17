import PropTypes from 'prop-types'

import classes from './starterImage.module.css';
import {Button} from '../../elements'

export const SectionImage=({btn, image})=>{
    return(
        <div className ={classes.starter__container}>
            <div className ={classes.starter__wrapper}>
                <img src={image} alt="Starter pack"/>
                <div className ={classes.starter__btn_wrapper}>
                     {btn && <Button text ="Get Solar Pack" />}
                </div>
            </div>
        </div>
    )
}

SectionImage.propTypes = {
    btn: PropTypes.bool.isRequired,
    image: PropTypes.string
}