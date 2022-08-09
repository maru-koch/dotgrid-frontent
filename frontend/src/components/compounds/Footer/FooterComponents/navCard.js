import { useNavigate } from 'react-router-dom'
import classes from '../footer.module.css'

const NavCard =()=>{
    const navigate = useNavigate()
    return (
   <div className={classes.footerCard__container}>
        <div className={classes.footerCard__wrapper}>
            <h2>Company</h2>
            <ul>
                <li>Our Story</li>
                <li>Blog</li>
                <li onClick={()=>navigate('/contact')}>Contact Us</li>
                <li>Career</li>
                <li>Get Started</li>
            </ul>
        </div>
    </div>
    )
}

export default NavCard