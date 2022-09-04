
import { useState} from 'react'
import { useDispatch } from 'react-redux'
import {APPLIANCE_ACTION} from '../../../../../../store/reducer/applianceReducer'


const TD_STYLE ={
    padding:'8px',
    backgroundColor: 'var(--)',
    borderRadius:'5px',
    border:'2px solid var(--primary-color)', 
    textAlign:'center', 
    fontSize: '1rem'
}

const WATT_STYLE={
    backgroundColor: 'var(--primary-color)', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100%', 
    width: '100%',
    padding: '15px 0',
    color: 'white',
    fontSize: '1.2rem', 
    fontFamily:'Poppins',
    fontWeight: 'bold',
}


const SECTION={
    backgroundColor: 'var(--background-color)',  
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center'
}
 
const applianceList =["Fan", "LED Light", "LED TV", "Sound System", "pressure"]

const ApplianceList=({getName, id})=>{
    // A dropdown component that displays the list of apppliances
   return(
        <main>
            <section style={{...SECTION}}>
                <select name="appliance" defaultValue ={"fan"} id ="appliance-select" style={{...TD_STYLE}} onChange={(e)=>getName(e.target.value)}>
                    {applianceList.map((appliance)=><option value={appliance}>{appliance}</option>)}
                </select>
            </section>
        </main>
    )
}



const Input=({onChangeHandler, name})=>{
    return (
        <td><input style={{...TD_STYLE}} onChange={(e)=>onChangeHandler(e)} type="text" name={name} /></td>
    )
}

export const ApplianceInput=({id})=>{
        // for input of appliances values: name, quantity, watt, watt-hour, hrperDay
 
        const dispatch = useDispatch();
        const [name, setName] = useState('')
        const  [appliance, setAppliance] = useState({
            name:'',
            quantity:0,
            watt:0,
            hrPerDay:0,
            wattHour:0
        })

        const getName=(name)=>{
            // gets the name of the selected appliances from the dropdown component
            setName(name)
            setAppliance({...appliance, name: name})
        }

        const addAppliance=() =>{
            // adds the appliance to list of appliances in store by calling the dispatch method
            if (appliance.quantity && appliance.watt && appliance.hrPerDay){ 
                if (!appliance.name){
                    setAppliance({...appliance, name: "Fan"})
                }
                estimateWattHour()
                dispatch(APPLIANCE_ACTION.addAppliance(appliance))
            }
        }
    
        const onChangeHandler=(e)=>{
            // updates the values of the appliances object whenever there is a change in the input value
            appliance[e.target.name] = parseInt(e.target.value)
            setAppliance(appliance)
            estimateWattHour()
        }

        const estimateWattHour=()=>{
            // calculates the electricy in watt consumed per hour by the appliance
            const wattHourValue = appliance.quantity * appliance.watt * appliance.hrPerDay
            // copies the previous values of appliance and replaces the value of the wattHour key with wattHourValue
            setAppliance({...appliance, name: name,  wattHour: wattHourValue})
        }

        return (
                <tr>
                    <td> <ApplianceList id = {id} getName={getName}/></td>
                    <Input name ="quantity" onChangeHandler={onChangeHandler}/>
                    <Input name ="watt" onChangeHandler={onChangeHandler}/>
                    <Input name ="hrPerDay" onChangeHandler={onChangeHandler}/>
                    <button style={{...WATT_STYLE}} onClick={()=>addAppliance()}>Add</button>  
                </tr>
        )
    }


