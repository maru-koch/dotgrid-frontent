import {useState} from 'react'
import { Section, SectionText, SectionWrapper, SectionImage, SectionHeader} from '../../elements'
import analytics_phone from '../../../assets/images/analytics_phone.png'
import analytics_computer from '../../../assets/images/analytics_computer.png'
import {RequestDemoForm, Modal, Loader, PopUp } from '../../compounds'

const word =[{
    title:'Energy Automation',
    desc: `
                Automate your energy consumption by setting when you want 
                your devices to turn on or off. You can remotely select 
                the time and how long you want a particular appliance to 
                be on to save Energy and optimize performance`,

    button_text: 'Order Solar PV Panel'
},{
    title:'Derive Insight',
    desc: `
               Monitor your energy consumption pattern by looking at 
               the visualization of your energy data. Our AI driven analytics will
               guide you in making the best decision.`,

    button_text: 'Request Demo'
}
]

export const WhyAnalytics =()=>{
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

    return(
        <Section>
            <SectionHeader title = "Why Dotgrid Analytics?" subtitle = ""/>
            <SectionWrapper>
                <SectionImage 
                    image={analytics_computer} 
                    height={'100%'} 
                    width={'100%'}
                    wrapperStyle={{height:600, width: 500}}
                    containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>
                <SectionText 
                    title ={word[0].title} 
                    description ={word[0].desc}
                    btn={true}
                    openModal={openModal}
                    btnText="Request Demo"/>
            </SectionWrapper>
         <SectionWrapper bg ={{backgroundColor:"#e6f3f8"}}>

            <SectionText 
                title ={word[1].title} 
                description ={word[1].desc}
                btn={true}
                openModal={openModal}
                btnText="Request Demo"/>

            <SectionImage 
                image={analytics_phone} 
                height={'100%'} 
                width={'50%'}
                wrapperStyle={{height:700, width: 500}}
                containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>
        </SectionWrapper>
        <Modal open = {open} >
            {
                requestDemo? 
                <PopUp 
                    title="Message Sent" 
                    content="We have received your message. You will contacted by our representative within 7 working days"
                    btnTitle="ok"
                />
                    :
                <RequestDemoForm requestDemo = {setRequestDemo}/>
            }
            
        </Modal>
        </Section>
       
    )
}