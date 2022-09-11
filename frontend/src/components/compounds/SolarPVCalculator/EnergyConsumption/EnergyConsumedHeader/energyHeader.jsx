import PropTypes from 'prop-types'
import {Section,Button, SectionWrapper} from '../../../../elements'
export const EnergyConsumedHeader=({func, btnTitle})=>{
    /*
        This component displays the button to add appliance or clear appliances depending on its state
        --------------------
            parameters
                func: a funtion that calls the clearAppliance or showAppliance method
                btnTitle: the button name depending on the function that is called
     */

    return (
        <Section bg={{width:'100%', display:'flex',justifyContent:'flex-end',}}>
            <SectionWrapper bg={{width:'100%', display:'flex',justifyContent:'flex-end', padding:'20px'}}>
                <Button onClick={()=>func()} color="var(--accent-color)" text={btnTitle} />
            </SectionWrapper>
        </Section>
    )
}


EnergyConsumedHeader.propTypes={
    func: PropTypes.func,
    btnTitle: PropTypes.string
}