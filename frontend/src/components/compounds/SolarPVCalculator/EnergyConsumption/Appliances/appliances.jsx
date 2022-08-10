
import {useMemo, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Appliance} from './Appliance'
import { EnergyResult} from '../EnergyResult'
import { APPLIANCE_ACTION } from '../../../../../store/reducer/applianceReducer'


const ApplianceHeader =()=>
        <thead>
            <tr>
                <th>Name</th>
                <th>Qnt</th>
                <th>Watt</th>
                <th>Hr/Day</th>
                <th>Watt-Hour</th>
            </tr>
        </thead>
   

export const Appliances=({appliances=[]})=>{
    // Appliance container, Displays the appliance, one row per appliance
    return (
        <table style ={{backgroundColor:'var(--background-color)'}}>
            <ApplianceHeader/>
            <tbody>
                {appliances.map((appliance, idx)=>
                    <Appliance 
                        quantity={appliance.quantity}
                        watt={appliance.watt}
                        hrPerDay={appliance.hrPerDay}
                        id={idx}
                    />)}
            </tbody>
        </table>
    )
}


