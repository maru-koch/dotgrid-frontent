
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Appliance} from './Appliance'
import { EnergyResult} from '../EnergyResult'
import { APPLIANCE_ACTION } from '../../../../../store/reducer/applianceReducer'


const ApplianceHeader =()=>
        <thead>
            <tr>
                <th>Appliance</th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Qnt</th>
                <th>Watt</th>
                <th>Hr/Day</th>
                <th>Watt-Hour</th>
            </tr>
        </thead>
   

export const Appliances=()=>{
    // Appliance container, Displays the appliance, one row per appliance
    const dispatch = useDispatch();
    const applianceList = useSelector(state =>state.appliance)

    const [appliances, setAppliances] = useState()

  
    return (
        <table>
            <ApplianceHeader/>
            <tbody>
                {applianceList.map((appliance)=>
                    <Appliance 
                        quantity={appliance.quantity}
                        watt={appliance.watt}
                        hrPerDay={appliance.hrPerDay}
                    />)}
            </tbody>
            <EnergyResult/>
        </table>
    )
}


