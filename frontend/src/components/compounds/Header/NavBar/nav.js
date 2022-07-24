import React from 'react'
import {DropDown} from '../DropDown'
import {Nav, Navbar } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import './nav.css'
import {useState} from 'react'
import logo from '../../../../assets/images/dotgrid_logo.png'



const items = [ 
                {id:1, metric :200, title:'Smart Metering', icon:"fa-computer"},
                {id:2, metric :200, title:'Smart Metering', icon:"fa-computer"},
                {id:3, metric :200, title:'Smart Metering', icon:"fa-computer"}
                ]
                
// Used in Header component
// comprises of the title, the Navigation links, and the order or purchase button

export default function NavLink(props){

    // show drop down if true
    const [showDropDown, setShowDropDown] = useState(false)
    const close=()=>{
        setShowDropDown(false)
    }
    return (
        <Navbar collapseOnSelect expand="lg" className ="navHeader">
            <Navbar.Brand href="/" className ="logo">
                <img src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className = "rightNav">
                <Nav className="nav">
                    <Nav className = "navLinks">
                        <Nav.Link className = "link"  href = "/"><p>HOME</p></Nav.Link>
                        <Nav.Link 
                            className =  "link" 
                            onMouseEnter={()=>setShowDropDown(true)}
                            href = "#"><p>TECHNOLOGIES</p></Nav.Link>
                        <Nav.Link className = "link"  href = "#"><p>SERVICES</p></Nav.Link>
                        <Nav.Link className = "link"  href = "#"><p>ABOUT</p></Nav.Link>
                        <Nav.Link className = "link"  href = "/contact"><p>CONTACT</p></Nav.Link>
                        <Nav className ="navAuth">
                            <Nav.Link className = "link"  href = "/signin">Login</Nav.Link>
                            <Nav.Link className = "link"  href = "/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Nav>
                </Nav>     
            </Navbar.Collapse>
        
            {showDropDown && <DropDown items ={items} closeDropDown={close}/>}

        </Navbar>
    )
}

