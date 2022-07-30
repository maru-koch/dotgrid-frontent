
import {Card} from '../../../elements'
import {ProjectMetrics} from './projectMetrics'
import classes from './solarProject.module.css'
import { useNavigate } from 'react-router-dom'

export const SolarProject =props=>{

    const navigate = useNavigate()

    return (

    // displays cards of projects 
    // displays image, location, description, and price
    // user can add to cart

    <div className = {classes.project__card}>
        <div className = {classes.project__container}>
            <div className ={classes.imgWrapper}>
                <img src = {props.image} alt = {props.name}/>
            </div>
            <div className = {classes.desc}>
                <h3>{props.title}</h3>
                <p class = {classes.description}>{props.description}</p>
            </div>
            <ProjectMetrics/>
            <div className={classes.address}>
                <p className={classes.city}>{props.city}</p>
                <button onClick={()=>navigate(`/listings/${1}`)}className={classes.city}>Project Details</button>
            </div>
        </div>
    </div>)
}

