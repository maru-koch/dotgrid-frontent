import {ListItem, Text, Section, SectionHeader, SectionWrapper} from '../../elements'
import {SubscribeForm} from './subscriptionForm'
import PropTypes from 'prop-types'

const Plan =({plan, features}) =>{

    // displays the plan selected by users and the features
    
    return (
        <Section>
            <Text.Heading>{plan}</Text.Heading>
            {features.map(feature =><ListItem item={feature}/>)}
        </Section>
    )
}

export const PriceForm=({priceModel})=>{

    // Displays the price model and the subscription Form

    return (
        <Section>
            <SectionHeader title = "Pricing Plan"/>
            <SectionWrapper>
                <Plan plan={priceModel.plan} features={priceModel.features}/>
                <SubscribeForm btnText="Get Started"/>
            </SectionWrapper>
        </Section>
    )
}

PriceForm.propTypes = {
    priceModel: PropTypes.object
}