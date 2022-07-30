import { Section, SectionWrapper, Card } from '../../elements'


const Category=({price, plan, features})=>{

    // Display a single plan and its features

    return (
        <Card>
            <h2>{plan}</h2>
            <h4>{price}</h4>
            <ul>
                {features.map((feature)=>{
                    <li>{feature}</li>
                })}
            </ul>
        </Card>
    )
}
export const PriceCategories=({priceModel, plans})=>{

    // Display a single plan and its features
    
    return (
        <SectionWrapper>
            {plans.map((plan, idx)=>{
                <Category key ={idx} price = {plan.price} plan ={plan.plan} features = {plan.features}/>
            })}
        </SectionWrapper>
    )
}

