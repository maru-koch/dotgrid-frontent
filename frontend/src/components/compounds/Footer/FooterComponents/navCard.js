import { useNavigate } from 'react-router-dom'

const NavCard =()=>{
    
    const navigate = useNavigate()

    return (
    <div className="footerCard">
        <h2>Company</h2>
        <ul>
            <li onClick={()=>navigate('/about')}>About us</li>
            <li onClick={()=>navigate('/careers')}>Careers</li>
            <li onClick={()=>navigate('/contact')}>Contact Us</li>
            <li onClick={()=>navigate('/our-story')}>Our Story</li>
        </ul>
    </div>
    )
}

export default NavCard