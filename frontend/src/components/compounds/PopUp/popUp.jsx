 
import PropTypes from 'prop-types'
import {Button} from '../../elements'
export const PopUp=({title, content, btnText, action})=>{
    return (
        <div className="pop__container">
            <div className="pop__wrapper">
                <div className="pop__title">
                    <h2>{title}</h2>
                </div>
                <p className="pop__content">{content}</p>
                <div className="pop__button">
                    <Button text= {btnText} onClick={()=>action()}/>
                </div>
            </div>
        </div>
    )
}

PopUp.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    btnText: PropTypes.string,
    action: PropTypes.string,
}