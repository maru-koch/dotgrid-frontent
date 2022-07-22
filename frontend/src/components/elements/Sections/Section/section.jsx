import './section.css'

export const Section = ({children, style}) =>{
    return (
    <section className = "section__container" style={style}>
        <section className = "section__wrapper">
            {children}
        </section>
    </section>
    )
}

