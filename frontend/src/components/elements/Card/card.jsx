
import './card.css'

import PropTypes from 'prop-types';
export const Card =({children, style})=>{
    return (
        <div className = {`genericCard ${style}`}>
            {children}
        </div>
    )
}

// ${props.class} allows you to add additional css class from the parent component;
// this enables you to customize the card as suitable

Card.propTypes = {
    children : PropTypes.node,
    style : PropTypes.string
}