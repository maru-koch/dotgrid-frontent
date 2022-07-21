import { useNavigate } from 'react-router-dom'
import classes from '../footer.module.css'

const MenuCard =()=>{
    const navigate = useNavigate()
    return (
    <div className={classes.footerCard__container}>
        <div className={classes.footerCard__wrapper}>
            <h2>Our Services</h2>
            <ul>
                <li onClick={()=>navigate('/solar-installation')}>Solar Panel Installation</li>
                <li>Energy Loan</li>
                <li onClick={()=>navigate('/solar-analytics')}>Solar Analytics</li>
                <li>Smart Metering</li>
                <li>Solar Projects Design and Costing</li>
            </ul>
        </div>
    </div>
    )
}

export default MenuCard