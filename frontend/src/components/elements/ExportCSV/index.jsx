import {Button, Text} from '../../elements'
import {useState} from 'react'
import {Modal} from '../../compounds'

import './export_csv.css'
export const ExportCSV=()=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum

    // Show modal
    const [isOpen, setIsOpen] = useState(false)

return(
    <main className="export__container">
        <section className ="export__wrapper">
            <div>
                <div className="export__csv">
                    <p>Export CSV</p>
                </div>
            </div>
            <div>
                <Button btnType="primary" onClick={()=> setIsOpen(true)}>
                    <Text size={14}>Visualize</Text>
                </Button>
            </div>
            <Modal open={isOpen} />
        </section>
    </main>
)
}