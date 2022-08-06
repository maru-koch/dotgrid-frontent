import { ListItem, SectionWrapper } from '../../elements'
import { SubscribeForm } from './subscriptionForm'
import PropTypes from 'prop-types'
import classes from './priceForm.module.css'

const Plan =({priceModel="", price="", features =[], modelType}) =>{

    // displays the plan selected by users and the features

    return (
        <div className={classes.plan__container}>
            <div className={classes.plan__wrapper}>
                <div className={classes.plan__heading}>
                    <h1 className={classes.plan__title}>{`${priceModel.toUpperCase()} PLAN`}</h1>
                    <p className={classes.plan__title}>{modelType}</p>
                </div>
                {features.map(feature =><ListItem item={feature}/>)}
                <p className={classes.plan__price}>
                    <span className={classes.plan__digit}>{price.split('/')[0]}</span>
                    {price === "free"?  " " : <span className={classes.plan__slash}>/</span> }
                    <span className={classes.plan__year}>{price.split('/')[1]}</span>
                </p>
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