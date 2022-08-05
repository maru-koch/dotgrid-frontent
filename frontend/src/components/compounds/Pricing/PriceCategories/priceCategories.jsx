import {Section, SectionWrapper, Button} from '../../../elements'
import classes from './priceCategories.module.css'
import PropTypes from 'prop-types'

const Category=({price, priceModel, features, openModal})=>{

    // Display a single plan and its features
    // the updatePriceModel funtion updates the PriceForm with the price, 
    // priceModel and features of the selected price plan

    const updateModel=()=>{
        openModal(true)
    }
    
    return (
        
        <div className={classes.priceCategory__container}>
            <div className={classes.priceCategory__wrapper}>
                <h2>{priceModel}</h2>
                <h4>{price}</h4>
                <ul>
                    {features.map((feature)=>
                        <li>{feature}</li>
                    )}
                </ul>
                <div className={classes.priceCategory__btn}>
                    <Button stretch text="Get Started" onClick={()=>updateModel()}/>
                </div>
            </div>
        </div>
   
    )
}
export const PriceCategories=({plans, openModal})=>{

    // Display a single plan and its features
    
    return (
        <Section>
            <SectionWrapper bg={{gap:'20px'}}>
                {plans.map((plan, idx)=>
                    <Category key ={idx} price={plan.price} priceModel ={plan.priceModel} features = {plan.features} openModal={openModal}/>
                )}
            </SectionWrapper>
        </Section>
       
    )
}


PriceCategories.propTypes = {
    plans: PropTypes.array,
    openModal: PropTypes.func
}
