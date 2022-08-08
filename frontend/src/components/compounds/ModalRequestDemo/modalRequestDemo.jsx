import { useState } from 'react';
import PropTypes from 'prop-types';
import { RequestDemoForm, Modal, PopUp } from '../../compounds';
import { Loader } from '../../elements';

export const ModalRequestDemo=({open = false})=>{

    // simplifies the process of requesting demo
    // and prevents the repetition of logic

    const [isOpen, setIsOpen] = useState(open)
    const [msgSent, setMsgSent] = useState(false)
    const [requestDemo, setRequestDemo] = useState(false)

    const closeModal=()=>{
        setIsOpen(false)
        setRequestDemo(false)
    }

    const requestDemoHandler =()=>{
         setRequestDemo(true)
         setTimeout(()=>{
            setMsgSent(true)
         }, 5000)
    }

    return (
        <div>
            <Modal open = {isOpen} >
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
        </div>
    )
}

ModalRequestDemo.propTypes = {
    open: PropTypes.bool,
    requestDemo: PropTypes.bool,
    msgSent: PropTypes.bool,
    closeModal: PropTypes.func,
    requestModalHandler: PropTypes.func,

}