import HeaderCartButton from './headerCartButton'
import HeaderOrderButton from './headerOrderButton'
import {Nav, Navbar} from "react-bootstrap";
import './nav.css'
import {useState} from 'react'




// Used in Header component
// comprises of the title, the Navigation links, and the order or purchase button

const NavLink = (props)=>{
    const [ordered, setOrdered] = useState(false)

    const setOrderedHandler=()=>{
        setOrdered(true)
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
                            <Nav.Link className =  "link"  href = "#"><p>TECHNOLOGIES</p></Nav.Link>
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
        </Navbar>
    )
}

export default NavLink