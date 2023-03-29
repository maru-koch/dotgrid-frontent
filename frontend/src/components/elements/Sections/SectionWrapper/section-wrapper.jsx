
import PropTypes from 'prop-types'
export const SectionWrapper = ({children, bg}) =>{

    // Wraps the Page sessions 
    // ensures responsiveness

    return (
    <section className = "flex flex-col items-center justify-center w-full md:justify-between md:flex-row">
        {children}
    </section>
    )
}

SectionWrapper.propTypes = {
    children: PropTypes.node,
    bg: PropTypes.string
}