import PropTypes from 'prop-types'

import classes from './section-image.module.css';
import {Button} from '../../elements'

export const SectionImage=({btn, btnText, image})=>{

    // Displays image and button on a page
    // only displays the button if btn is true

    return(
        <div className ={classes.starter__container}>
            <div className ={classes.starter__wrapper}>
                <img src={image} alt="Starter pack"/>
                <div className ={classes.starter__btn_wrapper}>
                     { btn && <Button text = { btnText } /> }
                </div>
            </div>
        </div>
    )
}

SectionImage.propTypes = {
    btn: PropTypes.bool.isRequired,
    btnText: PropTypes.string,
    image: PropTypes.string
}