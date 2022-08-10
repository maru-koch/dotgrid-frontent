import {Section, SectionContainer} from '../../../../elements'
import {useState } from 'react'
import {Appliance} from './Appliance'
import { EnergyResult} from '../EnergyResult'

const appliance ={
    id:0,
    quantity:1, 
    watt:0, 
    hrPerDay:0 
    }

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
    
    const applianceList =[]
    const [appliances, setAppliances] = useState(applianceList)

    const addAppliance = ()=>{
        applianceList.push(appliance)
    }

    const removeAppliance=(id)=>{
        applianceList.filter((item)=>item.id ===id)
    }
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


