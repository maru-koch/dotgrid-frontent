
import { useState} from 'react'
import { useDispatch } from 'react-redux'
import {APPLIANCE_ACTION} from '../../../../../../store/reducer/applianceReducer'


const applianceList =["Fan", "LED Light", "LED TV", "Sound System", "pressure"]

const ApplianceList=({getName, id})=>{
  
    const dispatch = useDispatch();

    const removeAppliance=()=>{
        console.log(id)
        dispatch(APPLIANCE_ACTION.removeAppliance({id:{id}}))
    }
const BTN={
    backgroundColor: 'var(--primary-color)', 
    color: 'white',
    height: '30px',
    width: '30px',
    padding: '20px',
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
    return(
        <main>
            <section style={{...SECTION}}>
                <button style={{...BTN}} onClick={()=>removeAppliance()}><i class="fa fa-remove"></i></button>
                <select name="appliance" id ="appliance-select" style={{...TD_STYLE}}>
                    {applianceList.map((appliance)=><option value={appliance}>{appliance}</option>)}
                </select>
            </section>
        </main>
    )
}

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

const Input=({onChangeHandler, name})=>{
    return (
        <td><input style={{...TD_STYLE}} onChange={()=>onChangeHandler} type="text" name={name} /></td>
    )
}

export const Appliance=({id})=>{

        const [watt, setWatt] = useState(0)
        const  [appliance, setAppliance] = useState({
            quality:0,
            watt:0,
            hrPerDay:0,
        })

        const onChangeHandler=(e)=>{
            appliance[e.target.name] = e.target.value
            setAppliance(appliance)
            const energyUsage = (appliance.hrPerDay * appliance.quality) / appliance.watt
            setWatt(watt)
        }

        return (
                <tr>
                    <td> <ApplianceList id = {id}/></td>
                    <Input name ="quantity" onChangeHandler={onChangeHandler}/>
                    <Input name ="watt" onChangeHandler={onChangeHandler}/>
                    <Input name ="hrPerDay" onChangeHandler={onChangeHandler}/>
                    <td style={{...WATT_STYLE}}>{watt}</td>  
                </tr>
        )
    }


