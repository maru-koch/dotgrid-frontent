import Nav from './NavBar/nav'
import classes from './header.module.css'

// Used in App component

export const Header = (props)=>{
    return (
    <main className = {classes.header}>
        <Nav showModal = {props.showModal}/>
    </main>)
}

