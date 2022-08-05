import {Section, SectionWrapper, Button} from '../../../elements'
import classes from './priceCategories.module.css'

const Category=({price, priceModel, features, updatePriceModel})=>{

    // Display a single plan and its features

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
                    <Button stretch text="Get Started" onClick={()=>updatePriceModel({priceModel: {priceModel}, price:{price}, features:{features}})}/>
                </div>
            </div>
        </div>
   
    )
}
export const PriceCategories=({plans})=>{

    // Display a single plan and its features
    console.log(plans)
    return (
        <Section>
            <SectionWrapper bg={{gap:'20px'}}>
                {plans.map((plan, idx)=>
                    <Category key ={idx} price={plan.price} priceModel ={plan.priceModel} features = {plan.features}/>
                )}
            </SectionWrapper>
        </Section>
       
    )
}

