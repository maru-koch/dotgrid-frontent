import {Section, SectionWrapper, SectionContainer} from '../../../../../elements'
import { useState } from 'react'
import { useEffect } from 'react'

const applianceList =["Fan", "LED Light", "LED TV", "Sound System", "pressure"]

const ApplianceList=({getName, removeAppliance})=>{
    return(
        <main>
            <section>
                <button onClick={()=>removeAppliance()}><i class="fa fa-remove"></i></button>
                <select name="appliance" id ="appliance-select">
                    {applianceList.map((appliance)=><option value={appliance}>{appliance}</option>)}
                </select>
            </section>
        </main>
    )
}
export const Appliance=({id, quantity, watt, hrPerDay, wattHour="0", removeAppliance})=>{
        return (
                <tr>
                    <td> <ApplianceList removeAppliance={removeAppliance}/></td>
                    <td><input type="text" name="watt" value={quantity}/></td>
                    <td><input type="text" name="watt" value={watt}/></td>
                    <td><input type="text" name="watt" value={hrPerDay}/></td>
                    <td>{wattHour}</td>  
                </tr>
        )
    }


