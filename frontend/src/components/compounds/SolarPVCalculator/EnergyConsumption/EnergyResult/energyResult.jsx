import PropTypes from 'prop-types'
import classes from "./energyResult.module.css"

export const EnergyResult=({total, num})=>{
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
                <td>{num? `${num} Appliances`: null}</td>
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