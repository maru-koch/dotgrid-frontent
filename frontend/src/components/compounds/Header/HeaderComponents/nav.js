import HeaderCartButton from './headerCartButton'
import HeaderOrderButton from './headerOrderButton'
import {Nav, Navbar} from "react-bootstrap";
import classes from '../header.module.css'
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
        <Navbar collapseOnSelect expand="lg" className ={`${classes.header}`}>
            <Navbar.Brand href="/">
                {/* "fa fa-cutlery" */}
                <h1>Foodly</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className = "rightNav">
                    <Nav className="nav">
                        <Nav className = "navLinks">
                            <Nav.Link className = {classes.link}  href = '/products'><p>Menu</p></Nav.Link>
                            <Nav>
                                <Nav.Link className = {classes.link}  href = "/"><p>Log in</p></Nav.Link>
                                <Nav.Link className = {classes.link}  href = "/"><p>Sign up</p></Nav.Link>
                            </Nav>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="">
                            {ordered? <HeaderCartButton showModal = {props.showModal}/> : <HeaderOrderButton showModal = {setOrderedHandler}/>}
                            </Nav.Link>
                        </Nav> 
                    </Nav>     
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavLink