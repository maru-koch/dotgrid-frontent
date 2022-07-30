import {Section, SectionWrapper, Card, Button} from '../../../elements'
import classes from './priceCategories.module.css'

const Category=({price, priceModel, features})=>{

    // Display a single plan and its features

    return (
        <Card bg={{backgroundColor:'#fff', border:'2px solid #eee'}}>
            <div className={classes.priceCategory__container}>
                <h2>{priceModel}</h2>
                <h4>{price}</h4>
                <ul>
                    {features.map((feature)=>
                        <li>{feature}</li>
                    )}
                </ul>
                <Button stretch text="Get Started"/>
            </div>
        </Card>
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

