import { useNavigate } from 'react-router-dom'

const MenuCard =()=>{
    const navigate = useNavigate()
    return (
    <div className="footerCard">
        <h2>Our Services</h2>
        <ul>
            <li onClick={()=>navigate('/solar-installation')}>Solar Panel Installation</li>
            <li onClick={()=>navigate('/energy-loan')}>Energy Loan</li>
            <li onClick={()=>navigate('/solar-analytics')}>Solar Analytics</li>
            <li onClick={()=>navigate('/smart-metering')}>Smart Metering</li>
            <li onClick={()=>navigate('/project-design')}>Solar Projects Design and Costing</li>
        </ul>
    </div>
    )
}

export default MenuCard