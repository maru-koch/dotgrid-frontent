
import { Text, Interval, Total} from "../../elements"

export const TotalPanel=({total, start, end})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum
return(
    <>
    <main>
        <div className="wrapper">
            <section>
                <Text text="TOTAL POWER CONSUMPTION"/>
                <Interval start={start} end={end}/>
                </section>
            <section>
                <Total total={total} />
            </section>
        </div>
    </main>
    </>
)
}