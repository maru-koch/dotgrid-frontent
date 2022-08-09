
import {Section, SectionHeader, SectionContainer} from '../../../components/elements'
import classes from './testimony.module.css';
import {testimonies} from '../../../constants/testimonyData'
const Card=({testimony, name, pic, position})=>{
    return (
        <main className = {classes.card}>
            <div class = {classes.progressBar}></div>
                <div class ={classes.left} ><i className = "fas fa-quote-left"></i></div>
                    <p class = {classes.testimonial}>{testimony}</p>
                    <div class ={classes.user}>
                        <img class ={classes.userImage} src ={pic} alt ={name}/>
                        <div class = {classes.userDetails}>
                        <h4 class = {classes.userName}>{name}</h4>
                        <p>{position}</p>
                    </div>
            </div>
        </main>
    )
}
export const Testimony = ()=>{
    return (
        <Section class = {classes.testimonyContainer}>
            <SectionHeader title = "Testimonials" subtitle ="What our Customers are saying"/>
            <SectionContainer>
                <Card 
                    testimony={testimonies[0].testimony} 
                    name={testimonies[0].name} 
                    positon={testimonies[0].position}
                    pic={testimonies[0].pic}
                />
            </SectionContainer>
        </Section>
    )
}

export default Testimony