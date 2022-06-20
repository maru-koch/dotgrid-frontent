import {Button, Text} from '../../elements'
import './index.css'
export const ExportCSV=()=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum
return(
    <>
    <section className ="wrapper">
        <div>
            <Text text ="Josla Electric, 2022"/>
        </div>
        <div>
            <Button text ="Export CSV"/>
        </div>
    </section>
    </>
)
}