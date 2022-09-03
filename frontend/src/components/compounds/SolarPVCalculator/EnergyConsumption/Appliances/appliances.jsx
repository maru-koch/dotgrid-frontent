
import {useMemo, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Section } from '../../../../elements'
import {Appliance} from './Appliance'
import { ApplianceInput } from './ApplianceInput'
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
    // Displays the appliance, one row per appliance
    // appliances is an array of all appliances
    const [total, setTotal] = useState(0)

    const estimateTotalWattHour=()=>{
        let totalWattHour
        for (let values of appliances){
            totalWattHour += values.wattHour
        }
        setTotal(totalWattHour)
    }
    return (
        <Section>
            <table style ={{backgroundColor:'var(--background-color)'}}>
            <ApplianceHeader/>
            <ApplianceInput/>
            <tbody>
                { appliances? appliances.map((appliance, idx)=>
                    <Appliance 
                        name = {appliance.name}
                        quantity={appliance.quantity}
                        watt={appliance.watt}
                        hrPerDay={appliance.hrPerDay}
                        wattHour ={appliance.wattHour}
                        id={idx}
                    />):null}
            </tbody>
            </table>
        <EnergyResult total = {total}/>
        </Section>
        
    )
}


