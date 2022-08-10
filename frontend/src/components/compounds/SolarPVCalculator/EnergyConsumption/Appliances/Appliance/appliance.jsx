
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
export const Appliance=({id, quantity, watt, hrPerDay, wattHour="0"})=>{
        return (
                <tr>
                    <td> <ApplianceList id = {id}/></td>
                    <td><input style={{...TD_STYLE}} type="text" name="watt" /></td>
                    <td><input style={{...TD_STYLE}} type="text" name="watt" /></td>
                    <td><input style={{...TD_STYLE}} type="text" name="watt" /></td>
                    <td>{wattHour}</td>  
                </tr>
        )
    }


