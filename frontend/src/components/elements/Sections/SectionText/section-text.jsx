import PropTypes from 'prop-types'
import { Button } from '../../../elements'
import  classes from './section-text.module.css'

export const SectionText = ({btn, style, title, description, btnText})=>{
    return (
    <div className={`${classes.sectionText__container} ${style}`}>
        <div className={classes.sectionText__wrapper}>
            <div className = {classes.sectionText__content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    {btn && <Button text={btnText}/>}
                </div>
            </div>
            {/* Show button if only btn is true */}
          
        </div>
    </div>
    )
}

SectionText.propTypes = {
    btn: PropTypes.bool.isRequired,
    style: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnText: PropTypes.string,
}