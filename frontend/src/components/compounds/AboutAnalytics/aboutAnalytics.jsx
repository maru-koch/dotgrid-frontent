import {SectionHeader, Section, SectionText } from '../../elements/Sections'
const description =`
    DotGrid Solar Solutions Optimizes Solar energy generation and consumption.
    It provides uncommon experience of a robust AI powered analytics and automation
    of home appliances through effecient IoT engineering.

    With our Solar Solution, home owners can automate when their appliances at home, office,
    or factory will be powered. It relieves then the stress of maintaining energy balance.
    When there is a surge in load, our system, using artificial intelligence, will automatical
    notify you and turns of energy hungry home appliance by reading their energy consumption
    history.
`
export const AboutAnalytics=()=>{
    return (
        <Section bg={{width:'100%'}}>
            <SectionText bg={{width: '100%'}}title ="Why Solar Analytics" description={description}/>
        </Section>
    )
}