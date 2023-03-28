
import { Logo } from '../../../elements'
import classes from '../footer.module.css'

const AddressCard =()=>{

    // displays opening time, address, and phone Number

    return (
    <div className="">
        <div className="">
            <div>
                <Logo height={'30px'} width={'80px'}/>
            </div>
            <div className ={classes.footerCard__address}>
                <div className ={classes.contact__wrapper}>
                    <div className ={classes.footerCard__address_box}>
                        <i className = "fa fa-envelope"></i>
                        <p>support@dotgrid.com</p>
                    </div>
                    <div className ={classes.footerCard__address_box}>
                        <i className = "fa fa-phone"></i>
                        <p>+2349012693884</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddressCard