
import { useEffect } from 'react'
import { useState} from 'react'
import { useDispatch } from 'react-redux'
import {APPLIANCE_ACTION} from '../../../../../../store/reducer/applianceReducer'


const applianceList =["Fan", "LED Light", "LED TV", "Sound System", "pressure"]
const BTN={
    backgroundColor: 'var(--primary-color)', 
    color: 'white',
    height: '30px',
    width: '30px',
    padding: '10px',
    margin: '10px',
    borderRadius: '50%', 
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
}
const SECTION={
    backgroundColor: 'var(--background-color)',  
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center'
}

const TD_STYLE ={
    padding:'2px',
    borderRadius:'5px',
    textAlign:'center', 
    fontSize: '1rem', 
    fontFamily:'Poppins',
    fontWeight:300,

}

const WATT_STYLE={
    backgroundColor: 'var(--background-color)', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100%', 
    width: '100%',
    padding: '15px 0',
    color: 'var(--primary-color)',
    fontSize: '1.2rem', 
    fontFamily:'Poppins',
    fontWeight: 'bold',
}

const ApplianceName=({name, idx})=>{
    // contains the remove button and displays the name of the appliance
    const [id, setId]= useState(idx)
    const dispatch = useDispatch();

    const removeAppliance=()=>{
        console.log("appliance Id2", idx)
        // removes an appliance fromt he list of appliances
        dispatch(APPLIANCE_ACTION.removeAppliance({id}))
    }
   
    return(
        <main>
            <section style={{...SECTION}}>
                <button style={{...BTN}} onClick={()=>removeAppliance()}><i class="fa fa-remove"></i></button>
                <h2 name="appliance" id ="appliance-select" style={{...TD_STYLE}}>
                    {name}
                </h2>
            </section>
        </main>
    )
}


const Label=({value})=>{
    return (
        <td><p style={{...TD_STYLE}}>{value}</p></td>
    )
}

export const Appliance=({id, name, quantity, watt, hrPerDay, wattHour})=>{
    // displays the name, quantity, watt, hrperDay and the watthour for each appliance
        return (
            <tr>
                <td> <ApplianceName idx = {id} name ={name}/></td>
                <Label name ="quantity" value ={quantity}/>
                <Label name ="watt" value ={watt}/>
                <Label name ="hrPerDay" value ={hrPerDay}/>
                <td style={{...WATT_STYLE}}>{wattHour}</td>  
            </tr>
        )
    }


