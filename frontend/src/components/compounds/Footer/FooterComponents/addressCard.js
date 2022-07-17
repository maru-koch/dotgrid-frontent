import { ContactInfo } from "../../Contact"
import { Logo } from '../../../elements'

const AddressCard =()=>{

    // displays opening time, address, and phone Number

    return (
    <div className="footerCard">
        <div>
            <Logo height={'50px'} width={'100px'}/>
        </div>
        <ContactInfo/>
    </div>
    )
}

export default AddressCard