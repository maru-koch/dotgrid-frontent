import React, {useState} from 'react'
import {DropDown} from '../DropDown'
import {Nav, Navbar } from "react-bootstrap";
import {ModalRequestDemo} from '../../ModalRequestDemo'
import logo from '../../../../assets/images/dotgrid_logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import './nav.css'





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

    // manager request demo forms and popup
    const [open, setOpen] = useState(false)
    const [msgSent, setMsgSent] = useState(false)
    const [requestDemo, setRequestDemo] = useState(false)

    const openModal=()=>{
        setOpen(true)
    }
    const closeModal=()=>{
        setOpen(false)
        setRequestDemo(false)
    }

    const requestDemoHandler =()=>{
         console.log('Demo requested')
         setRequestDemo(true)
         setTimeout(()=>{
            setMsgSent(true)
         }, 5000)
    }

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
                        <Nav.Link className = "link nav"  href = "/"><p>HOME</p></Nav.Link>
                        <Nav.Link 
                            className =  "link" 
                            onMouseEnter={()=>setShowDropDown(true)}
                            href = "#"><p>TECHNOLOGIES</p></Nav.Link>
                        <Nav.Link className = "link nav"  href = "/pricing"><p>PRICING</p></Nav.Link>
                        <Nav.Link className = "link nav"  href = "#"><p>ABOUT</p></Nav.Link>
                        <Nav.Link className = "link nav"  href = "/contact"><p>CONTACT</p></Nav.Link>

                        <Nav className ="navAuth">
                            <Nav.Link 
                                className = "link demo" 
                                href = "#"
                                onClick={()=>openModal()}>BOOK A DEMO</Nav.Link>
                            <Nav.Link className = "link login"  href = "/signin">Log in</Nav.Link>
                        </Nav>

                    </Nav>
                </Nav>     
            </Navbar.Collapse>
        
            {showDropDown && <DropDown items ={items} closeDropDown={close}/>}

            <ModalRequestDemo
                open={open}
                msgSent={msgSent}
                closeModal={closeModal}
                requestDemo = {requestDemo}
                requestDemoHandler={requestDemoHandler}
            />

        </Navbar>
    )
}

