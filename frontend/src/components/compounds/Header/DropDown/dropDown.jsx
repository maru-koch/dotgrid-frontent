
import classes from './dropDown.modules.css'
import { DashCard } from '../../../molecules/DashCard'

const DropDownItem=({icon, title, description})=>{

    // Displays each menu sub Item

    return (
        <main className={classes.dropdown_item__container}>
            <div className={classes.dropdown_item__wrapper}>
                <section className={classes.dropdown_item__section_left}>
                    <i className={icon}></i>
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
        <main className={classes.dropdown__container}>
            <section className={classes.dropdown_wrapper}>
                {items.map((item,idx)=>
                    <DashCard 
                        key ={idx} 
                        id = {item.id}
                        icon = {item.icon}
                        title = {item.title}
                        description = {item.description}
                    />)}  
            </section>
        </main>
    )
}