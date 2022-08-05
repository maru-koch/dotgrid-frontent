
import PropTypes from 'prop-type';

export const ListItem = ({icon, item}) =>{
    return (
        <main>
            <i className={icon}></i>
            <p>{item}</p>
        </main>
    )
}


ListItem.propTypes = {
    icon: PropTypes.string,
    items: PropTypes.string
}