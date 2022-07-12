
import classes from './dropDown.module.css'
import { DashCard } from '../../../molecules/DashCard'

const DropDownItem=({icon, title, description, closeDropDown})=>{

    // Displays each menu sub Item

    return (
        <main className={classes.dropdown_item__container} onClick={()=>closeDropDown(true)}>
            <div className={classes.dropdown_item__wrapper}>
                <section className={classes.dropdown_item__section_left}>
                    <i className={`fa ${icon}`}></i>
                </section>
                <section className={classes.dropdown_item__section_right}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </section>
            </div>
        </main>
    )
}


export const  DropDown=(items)=>{

    // Go through the items, and output a drop down item for each

    return (
        <main className={classes.dropdown__container} onMouseLeave={()=>items.closeDropDown()}>
            <section className={classes.dropdown__wrapper}>
                {items.forEach((item,idx)=>
                    <DropDownItem 
                        key ={idx} 
                        id = {idx}
                        icon = {item.icon}
                        title = {item.title}
                        description = {item.desc}
                    />)}  
                {/* <DropDownItem 
                        key ={1} 
                        id = {1}
                        icon = {"fa-computer"}
                        title = {"Energy Analytics"}
                        description = {"coming soon"}
                        closeDropDown = {items.closeDropDown}
                    /> */}
            </section>
        </main>
    )
}