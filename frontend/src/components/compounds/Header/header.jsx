import Nav from './HeaderComponents/nav'
import classes from './header.module.css'

// Used in App component
import {Fragment} from 'react'
export const Header = (props)=>{
    return <Fragment class = {classes.header}>
        <Nav showModal = {props.showModal}/>
    </Fragment>
}

