
import Section from '../../UI/section'
import SectionHeader from '../../UI/section-header'
import SectionContainer from '../../UI/section-container.js'
import classes from './subscribe.module.css'



const Subscribe=(props)=>{  
    return (
    <Section>
        <SectionContainer style ={classes.section}>
            <SectionHeader title ="Subscribe to News Letter" subtitle = "Be the first to Know about amazing Discount and Promo"/>
            <div className={classes.container}>
                <div className={classes.sub}>
                    <input type="text" placeholder = "Your Email"/>
                    <button>Sign up</button>
                </div>
            </div>
        </SectionContainer>
    </Section>)
}

export default Subscribe