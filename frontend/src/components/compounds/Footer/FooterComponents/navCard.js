import { useNavigate } from 'react-router-dom'
import classes from '../footer.module.css'

const NavCard =()=>{
    const navigate = useNavigate()
    return (
   <div className={classes.footerCard__container}>
        <div className={classes.footerCard__wrapper}>
            <h2>Company</h2>
            <ul>
                <li>About us</li>
                <li>Careers</li>
                <li onClick={()=>navigate('/contact')}>Contact Us</li>
                <li>Blog</li>
                <li>Our Story</li>
            </ul>
        </div>
    </div>
    )
}

export default NavCard