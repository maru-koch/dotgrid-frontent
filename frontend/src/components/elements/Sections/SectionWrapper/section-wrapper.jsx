import './section-wrapper.css'
import PropTypes from 'prop-types'
export const SectionWrapper = ({children, style}) =>{
    return (
    <section className = {`sectionWrapper ${style}`}>
        {children}
    </section>
    )
}

SectionWrapper.propTypes = {
    children: PropTypes.node,
    style: PropTypes.string
}