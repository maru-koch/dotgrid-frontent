import {InputDropdown, Metrics} from '../../elements'

export const MetricPanel=({data, average, total, maximum, minimum})=>{
    // Displays the Select device drop down
    // shows estimated total, average, minimum, and maximum via the metrics of
return(
    <>
    <main>
         <section>
            <InputDropdown />
        </section>
         <section>
            <Metrics />
        </section>
    </main>
    </>
)
}