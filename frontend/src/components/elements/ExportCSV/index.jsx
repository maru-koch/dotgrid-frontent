import {Button, Text} from '../../elements'

export const ExportCSV=()=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum
return(
    <>
    <section>
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