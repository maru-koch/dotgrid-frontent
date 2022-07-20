
import classes from './dropDown.module.css'
import { useNavigate } from 'react-router-dom'

const DropDownItem=({icon, title, description, closeDropDown, url})=>{
    const navigate = useNavigate()

    
    const dropDownAction=()=>{
        // close dropdown when clicked
        closeDropDown(true)
        navigate(url)
    }

    return (
        <main className={classes.dropdown_item__container} onClick={()=>dropDownAction()}>
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
                
                <DropDownItem 
                        key ={1} 
                        id = {1}
                        icon = {"fa-weight-scale"}
                        title = {"Smart metering"}
                        description = {"View your energy consumption in real-time via mobile, desktop or web"}
                        closeDropDown = {items.closeDropDown}
                    />
                <DropDownItem 
                        key ={1} 
                        id = {1}
                        icon = {"fa-chart-line"}
                        url = "/solar-analytics"
                        title = {"Energy Analytics"}
                        description = {"Estimate and optimize the rate of your energy consumption"}
                        closeDropDown = {items.closeDropDown}
                    />
                <DropDownItem 
                        key ={1} 
                        id = {1}
                        icon = {"fa-gift"}
                        title = {"Energy Sharing"}
                        description = {"Gift a neigbour energy today. It is as simple as sharing the sunshine."}
                        closeDropDown = {items.closeDropDown}
                    />
            </section>
        </main>
    )
}