import {DropDown} from '../DropDown'
import {Nav, Navbar} from "react-bootstrap";
import './nav.css'
import {useState} from 'react'



const items = [ 
                {id:1, metric :200, title:'Smart Metering', icon:"fa-computer"},
                {id:2, metric :200, title:'Smart Metering', icon:"fa-computer"},
                {id:3, metric :200, title:'Smart Metering', icon:"fa-computer"}
                ]
                
// Used in Header component
// comprises of the title, the Navigation links, and the order or purchase button

const NavLink = (props)=>{
    const [showDropDown, setShowDropDown] = useState(false)

    const dropDown = ()=>{
        setShowDropDown(true)
    }

    return (
        <Navbar collapseOnSelect expand="lg" className ="navHeader">
            <Navbar.Brand href="/" className ="logo">
              {/* <i class="fa-solid fa-sun-bright"></i> */}
                <h1>Dotgrid</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className = "rightNav">
                <Nav className="nav">
                    <Nav className = "navLinks">
                        <Nav.Link className = "link"  href = "#"><p>HOME</p></Nav.Link>
                        <Nav.Link className =  "link" onMouseEnter={dropDown()} href = "#"><p>TECHNOLOGIES</p></Nav.Link>
                        <Nav.Link className = "link"  href = "#"><p>SERVICES</p></Nav.Link>
                            <Nav.Link className = "link"  href = "#"><p>ABOUT</p></Nav.Link>
                        <Nav.Link className = "link"  href = "#"><p>CONTACT</p></Nav.Link>
                        <Nav className ="navAuth">
                            <Nav.Link className = "link"  href = "/"><p></p></Nav.Link>
                            <Nav.Link className = "link"  href = "/"><p></p></Nav.Link>
                        </Nav>
                    </Nav>
                </Nav>     
            </Navbar.Collapse>
            {showDropDown? <DropDown items ={items}/>:''}
        </Navbar>
    )
}

export default NavLink