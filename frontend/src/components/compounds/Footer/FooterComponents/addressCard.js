
import { Logo } from '../../../elements'
import classes from '../footer.module.css'

const AddressCard =()=>{

    // displays opening time, address, and phone Number

    return (
    <div className={classes.footerCard__container}>
        <div className={classes.footerCard__wrapper}>
            <div>
                <Logo height={'50px'} width={'100px'}/>
            </div>
            <div className ={classes.footerCard__address}>
                <div className ={classes.contact__wrapper}>
                    <div className ={classes.footerCard__address_box}>
                        <i className = "fa fa-map-marker"></i>
                        <p>No. 7 Asajon way, Sango-tedo, Lagos</p>
                    </div>
                    <div className ={classes.footerCard__address_box}>
                        <i className = "fa fa-envelope"></i>
                        <p>support@dotsolar.com</p>
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