import { ListItem, SectionWrapper } from '../../elements'
import { SubscribeForm } from './subscriptionForm'
import PropTypes from 'prop-types'
import classes from './priceForm.module.css'

const Plan =({priceModel, price, features, modelType}) =>{

    // displays the plan selected by users and the features

    return (
        <div className={classes.plan__container}>
            <div className={classes.plan__wrapper}>
                <div className="heading">
                    <h1 className={classes.plan__title}>{`${priceModel} Plan`}</h1>
                    <p className={classes.plan__title}>{modelType}</p>
                </div>
                {features.map(feature =><ListItem item={feature}/>)}
                <p className={classes.plan__title}>{price}</p>
            </div>
        </div>
    )
}

export const PriceForm=({ plan })=>{
  
    // Displays the price model and the subscription Form

    return (
        <div className={classes.priceForm__container}>
            <SectionWrapper bg={{height:'500px'}}>
                <Plan 
                    price={plan.price} 
                    priceModel={plan.priceModel} 
                    features={plan.features} 
                    modelType={plan.modelType}
                />
                <SubscribeForm btnText="Get Started" bg={{height:'500px'}}/>
            </SectionWrapper>
        </div>
    )
}

PriceForm.propTypes = {
    priceModel: PropTypes.object
}