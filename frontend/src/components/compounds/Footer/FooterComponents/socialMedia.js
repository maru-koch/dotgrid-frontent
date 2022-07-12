import {Link} from 'react-router-dom'
import classes from './socialMedia.module.css'


const SocialMedia = ()=>{
    return (
        <div className ={classes.container}>
            <div className = {classes.wrapper}>
                <Link to = "" className = {classes.icons}><i  className = "fab fa-facebook" ></i></Link>
                <Link to = "" className = {classes.icons}><i  className = "fab fa-twitter"></i></Link>
                <Link to = "" className = {classes.icons}><i  className = "fab fa-instagram"></i></Link>
            </div>
        </div>
    )
}

export default SocialMedia