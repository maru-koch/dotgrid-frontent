import PropTypes from 'prop-types'
import classes from "./energyResult.module.css"

export const EnergyResult=({total, num = 0})=>{
    /*
        This components displays the total energy consumed by all appliances components
        and the total number of appliances
            -------------
            parameters: 
                total: total energy consumed by all appliances
                num: total number of appliances
     */
    return (
        <div className={classes.tableFooter}>
            <tr>
                <td><span className={classes.numOfAppliance}>{num? `${num}`: 0}</span> {num > 1? 'Appliances' : 'Appliance'}</td>
                <td className={classes.tableTotal__Title} >Total Energy Consumed 'watt/per day'</td>
                <td className={classes.tableTotal} >{total}</td>
            </tr>
        </div>
                
    )
}

EnergyResult.propTypes = {
    total: PropTypes.number,
    num: PropTypes.number
}