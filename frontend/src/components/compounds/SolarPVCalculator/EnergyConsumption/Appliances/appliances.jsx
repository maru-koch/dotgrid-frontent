
import {useMemo, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Section } from '../../../../elements'
import {Appliance} from './Appliance'
import { ApplianceInput } from './ApplianceInput'
import { EnergyResult} from '../EnergyResult'
import { useEffect } from 'react'


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
   

export const Appliances=()=>{
    // Displays the appliance, one row per appliance
    // appliances is an array of all appliances
    const applianceList = useSelector(state =>state.appliance)

    const [total, setTotal] = useState(0)
    const [appliances, setAppliances] = useState(applianceList)

    const estimateTotalWattHour=()=>{
        let totalWattHour = 0;
        for (let appliance of applianceList){
            totalWattHour += appliance.wattHour
        }
        setTotal(totalWattHour)
    }

    useEffect(()=>{
        setAppliances(applianceList)
        estimateTotalWattHour()
        },[applianceList])

    return (
        <Section>
            <table style ={{backgroundColor:'var(--background-color)'}}>
            <ApplianceHeader/>
            <ApplianceInput/>
            <tbody>
                { appliances[0]? appliances.map((appliance, idx)=>
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


