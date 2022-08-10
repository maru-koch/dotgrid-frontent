import { useNavigate } from 'react-router-dom'
import classes from '../footer.module.css'

const MenuCard =()=>{
    const navigate = useNavigate()
    return (
    <div className={classes.footerCard__container}>
        <div className={classes.footerCard__wrapper}>
            <h2>What It does</h2>
            <ul>
                <li onClick={()=>navigate('/solar-calculator')}>Solar PV Calculator</li>
                <li>Solar Analytics</li>
                <li onClick={()=>navigate('/solar-analytics')}>Energy Automation</li>
                <li>Smart Metering</li>
                <li>Fault detection and Reporting</li>
            </ul>
        </div>
    </div>
    )
}

export default MenuCard