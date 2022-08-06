import PropTypes from 'prop-types'
import classes from './sectionTitle.module.css'

export const SectionTitle=({image, text})=>{
    return (
        <main className ={classes.sectionTitle__container} style={{backgroundImage: `url(${image})`}}>
            <section className ={classes.sectionTitle__wrapper} >
                <h1>{text}</h1>
            </section>
        </main>
    )
}

SectionTitle.propTypes={
    image:PropTypes.instanceOf(Image),
    text:PropTypes.string
}