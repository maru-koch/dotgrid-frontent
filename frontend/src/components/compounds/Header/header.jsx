import Nav from './HeaderComponents/nav'
import classes from './header.module.css'

// Used in App component

export const Header = (props)=>{
    return (
    <main class = {classes.header}>
        <Nav showModal = {props.showModal}/>
    </main>)
}

