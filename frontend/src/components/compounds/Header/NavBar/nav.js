import React, {useState} from 'react'
import {DropDown, Menu} from '../../Header'
import {ModalRequestDemo} from '../../ModalRequestDemo'
import logo from '../../../../assets/images/dotgrid_logo.png'
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

    // Shows the menu on Mobile Screen
    const [showMenu, setShowMenu] = useState(false)

    // request demo forms and popup
    const [open, setOpen] = useState(false);

    const openModal=()=>{
        setOpen(true)
    }

    const close=()=>{
        setShowDropDown(false)
    }

   

    const openMenu=()=>{
        // sets the value of the showMenu to either true or false

        if (!showMenu){
            setShowMenu(true)
        }else{
            setShowMenu(false)
        }
    }

    // Different style when the menu is expanded and when on mobile
    // apply style 'expanded' to the unordered list from medium screen upward, and mobile on mobile screen

    const style ={expanded:'hidden md:flex flex-row space-x-5 justify-end w-full', mobile:"bg-slate-100 absolute text-md text-textColor text-poppins text-left mt-80 w-full flex-col p-2" }
    return (
        <nav className="relative flex justify-between items-center w-full list-none bg-slate-100">
            <div href="/" className ="logo">
                <img src={logo} alt="logo"/>
            </div>
            {/* Give different stylying to the menu depanding on if it is mobile or not */}
            <ul className={`${showMenu? style.mobile: style.expanded}`}>
                    <li className = "p-2" onMouseEnter={()=>setShowDropDown(true)} href = "#">TECHNOLOGIES</li>
                    <li className = "p-2"  href = "/pricing"><p>PRICING</p></li>
                    <li className = "p-2" href = "#" onClick={()=>openModal()}>BOOK A DEMO</li>
                    <li className = "p-2"  href = "/signin">Log in</li>
            </ul>
            {/* 
            
                Menu button below only displayed on mobile screen
             */}

            <div className="cursor-pointer w-10 h-10 mt-5 absolute top-0 right-0 block md:hidden" onClick={()=>openMenu()}>
                <div>
                    <div class="h-2 bg-black mt-1"></div>
                    <div class="h-2 bg-black mt-1"></div>
                    <div class="h-2 bg-black mt-1"></div>
                </div>
            </div>

            {showDropDown && <DropDown items ={items} closeDropDown={close}/>}
            <ModalRequestDemo open={open}/>
        </nav>
    )
}

