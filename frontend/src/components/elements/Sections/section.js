import './section.css'

export const Section = props =>{
    return (
    <section className = {`${props.style} section`}>
        {props.children}
    </section>
    )
}

