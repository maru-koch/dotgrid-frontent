import classes from './dropDowm.module.css'
const DropDownItem=({icon, title, description})=>{
    return (
        <main className={classes.dropdown__container}>
            <div className={classes.dropdown__container}>
                <section className={classes.dropdown__section_left}>
                    <i className={icon}></i>
                </section>
                <section className={classes.dropdown__section_right}>
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
        <main>
            {items.map((item,idx)=>
            <DropDownItem 
                key ={idx } 
                icon = {item.icon}
                title = {item.title}
                description = {item.description}
            />)}  
        </main>
    )
}