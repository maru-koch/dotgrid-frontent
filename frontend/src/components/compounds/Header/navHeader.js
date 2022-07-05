import Nav from './nav'
import classes from './navHeader.module.css'

// Used in App component

import {Fragment} from 'react'
const NavHeader = (props)=>{
    return <Fragment class = {classes.header}>
        <Nav showModal = {props.showModal}/>
    </Fragment>
}

export default NavHeader