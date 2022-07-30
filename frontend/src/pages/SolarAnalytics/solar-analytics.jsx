import {useState} from 'react'
import { SectionHeader } from '../../components/elements/Sections'
import { SolarAnalytic, WhyAnalytics, Loader, RequestDemoForm, Modal, PopUp } from '../../components'
import { PageLayout } from '../../layout'
import { HowItWorks } from '../../components/compounds/HowItWorks/HowItWorks'




const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}


export const SolarAnalytics =()=>{

    // Shows the requestDemoForm when no request is made
    // when a valid request is made by the user, it shows the loader
    // when the request is successfully sent, it shows the Pop-up

    const [open, setOpen] = useState(false)
    const [msgSent, setMsgSent] = useState(false)
    const [requestDemo, setRequestDemo] = useState(false)

    const openModal=()=>{
        setOpen(true)
    }
    const closeModal=()=>{
        setOpen(false)
        setRequestDemo(false)
    }

    const requestDemoHandler =()=>{
         console.log('Demo requested')
         setRequestDemo(true)
         setTimeout(()=>{
            setMsgSent(true)
         }, 5000)
    }

    return (
    <PageLayout>
        <SectionHeader title="Solar Analytics" subtitle="Track Your Energy Consumption and Save Cost" style={PAGEHEADER_STYLE}/>
        <SolarAnalytic/>
        <WhyAnalytics  openModal ={openModal}/>
        <HowItWorks/>
        <Modal open = {open} >
            {
            msgSent?
                <PopUp 
                    title="Message Sent" 
                    content="We have received your message. You will be contacted by our representative within 7 working days"
                    btnText="ok"
                    action={closeModal}
                />
                :
            requestDemo? 
                <Loader text ="...sending" hasText={true}/>
                    :
                <RequestDemoForm close={closeModal} requestDemo = {requestDemoHandler}/>
            }
        </Modal>
    </PageLayout>)
}
