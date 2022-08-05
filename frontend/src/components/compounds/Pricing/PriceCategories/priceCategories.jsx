import {Section, SectionWrapper, Button} from '../../../elements'
import classes from './priceCategories.module.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { PRICE_ACTIONS } from '../../../../store/reducer/price'

const Category=({price, priceModel, features, openModal})=>{

    // Display a single plan and its features
    // the updatePriceModel funtion updates the PriceForm with the price, 
    // priceModel and features of the selected price plan
    const dispatch = useDispatch();

    const [payload, setPayload] = useState({
        price:{price}, 
        priceModel:{priceModel}, 
        features:{features},
    })

    console.log('price category',payload)

    // const updateModel=()=>{
    //     dispatch(PRICE_ACTIONS.setPriceModel(payload))
    //     openModal(true)
    // }

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
                    <Button stretch text="Get Started" onClick={()=> dispatch(PRICE_ACTIONS.setPriceModel(payload))}/>
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
