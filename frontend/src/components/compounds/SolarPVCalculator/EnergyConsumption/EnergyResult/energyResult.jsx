import { Section, SectionWrapper } from "../../../../elements"
import classes from "./energyResult.module.css"

export const EnergyResult=({total})=>{
    // Displays the total energy consumed by the appliances
    return (
        <div className={classes.tableFooter}>
            <tr>
                <td className={classes.tableTotal__Title} >Total Energy Consumed 'watt/per day'</td>
                <td className={classes.tableTotal} >{total}</td>
            </tr >
        </div>
                
    )
}