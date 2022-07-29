
import PropTypes from 'prop-types'

export const PopUp=({title, content, btnText, action})=>{
    return (
        <div className="pop__container">
            <div className="pop__wrapper">
                <div className="pop__title">
                    <h2>{title}</h2>
                </div>
                <p>{content}</p>
                <div className="pop__button">
                    <button onClick={()=>action()}>{btnText}</button>
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