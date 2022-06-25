import {Button, Text} from '../../elements'
import {useState} from 'react'
import {Modal, Analytics} from '../../compounds'

import './export_csv.css'
export const ExportCSV=()=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum

    // Show modal
const [isOpen, setIsOpen] = useState(false)

const openModal=()=>{
    setIsOpen(true);
    console.log('exportCSV', isOpen)};

const closeModal=()=>{
    setIsOpen(false);
    console.log('exportCSV', isOpen)};

return(
    <main className="export__container">
        <section className ="export__wrapper">
            <div>
                <div className="export__csv">
                    <p>Export CSV</p>
                </div>
            </div>
            <div>
                <Button btnType="primary" onClick={()=> openModal()}>
                    <Text size={14}>Visualize</Text>
                </Button>
            </div>
            {/* <Modal open={isOpen} close={()=> closeModal()}>
                <Analytics/>
            </Modal> */}
        </section>
    </main>
    )
}