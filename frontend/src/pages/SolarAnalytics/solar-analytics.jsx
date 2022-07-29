import {useState} from 'react'
import { SectionHeader } from '../../components/elements/Sections'
import { SolarAnalytic, WhyAnalytics } from '../../components/compounds'
import { PageLayout } from '../../layout'
import { HowItWorks } from '../../components/compounds/HowItWorks/HowItWorks'
import {RequestDemoForm, Modal, Loader, PopUp } from '../../components'



const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}


export const SolarAnalytics =()=>{
    const [open, setOpen] = useState(false)
    const [msgSent, setMsgSent] = useState(false)
    const [requestDemo, setRequestDemo] = useState(false)

    const openModal=()=>{
        setOpen(true)
    }
    const closeModal=()=>{
        setOpen(false)
    }

    const sendMsg = ()=>{
        setMsgSent(true)
    }

    return (
    <PageLayout>
        <SectionHeader title="Solar Analytics" subtitle="Track Your Energy Consumption and Save Cost" style={PAGEHEADER_STYLE}/>
        <SolarAnalytic/>
        <WhyAnalytics  openModal ={openModal}/>
        <HowItWorks/>
        <Modal open = {open} >
            {
                requestDemo? 
                <PopUp 
                    title="Message Sent" 
                    content="We have received your message. You will be contacted by our representative within 7 working days"
                    btnText="ok"
                    action={closeModal}
                />
                    :
                <RequestDemoForm close={closeModal} requestDemo = {setRequestDemo}/>
            }
            
        </Modal>
    </PageLayout>)
}
