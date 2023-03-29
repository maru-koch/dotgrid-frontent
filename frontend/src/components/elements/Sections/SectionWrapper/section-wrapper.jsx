import './section-wrapper.css'
import PropTypes from 'prop-types'
export const SectionWrapper = ({children, bg}) =>{

    // Wraps the Page sessions 
    // ensures responsiveness

    return (
    <section className = "bg-red-700 flex flex-wrap flex-col justify-center w-full md:justify-between md:flex-row">
        {children}
    </section>
    )
}

SectionWrapper.propTypes = {
    children: PropTypes.node,
    bg: PropTypes.string
}