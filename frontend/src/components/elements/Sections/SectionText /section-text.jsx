import PropTypes from 'prop-types'
import { Button } from '../..'
import  classes from './section-text.module.css'

export const SectionText = ({btn, style, title, description, btnText})=>{
    return (
    <div className={classes.container}>
        <div className={classes.container}>
            <div className = {`${classes.sectionHeader} ${style}`}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {/* Show button if only btn is true */}
            <div>
                {btn && <Button text={btnText}/>}
            </div>
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