import { useNavigate } from 'react-router-dom'

const MenuCard =()=>{
    const navigate = useNavigate()
    return (
    <div className="footerCard">
        <h2>Our Services</h2>
        <ul>
            <li>Solar Panel Installation</li>
            <li>Energy Loan</li>
            <li onClick={()=>navigate('/solar-analytics')}>Solar Analytics</li>
            <li>Smart Metering</li>
            <li>Solar Projects Design and Costing</li>
        </ul>
    </div>
    )
}

export default MenuCard