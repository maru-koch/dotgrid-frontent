import './section-wrapper.css'

export const SectionWrapper = props =>{
    return (
    <section className = {`sectionWrapper ${props.style}`}>
        {props.children}
    </section>
    )
}
