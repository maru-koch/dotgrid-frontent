import { ContactInfo } from "../../Contact"
import { Logo } from '../../../elements'

const AddressCard =()=>{

    // displays opening time, address, and phone Number

    return (
    <div className="footerCard">
        <div>
            <Logo/>
        </div>
        <ContactInfo/>
    </div>
    )
}

export default AddressCard