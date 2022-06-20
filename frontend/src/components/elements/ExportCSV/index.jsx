import {Button, Text} from '../../elements'
import './export_csv.css'
export const ExportCSV=()=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum
return(
    <main className="export__container">
        <section className ="export__wrapper">
            <div>
                <div className="export__csv">
                    <p>Export CSV</p>
                </div>
            </div>
            <div>
                <Button btnType="secondary">
                    <Text size={14}>Visualize</Text>
                </Button>
            </div>
        </section>
    </main>
)
}