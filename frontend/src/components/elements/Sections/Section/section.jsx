import './section.css'

export const Section = props =>{
    return (
    <section className = {`${props.style} section__container`}>
        <section className = "section__wrapper">
            {props.children}
        </section>
    </section>
    )
}

