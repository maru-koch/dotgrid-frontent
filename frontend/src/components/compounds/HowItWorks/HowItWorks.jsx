import { Section, SectionWrapper, SectionHeader } from '../../elements'
import { CardItem } from './HowCard'
import { howItWorksData } from '../../../constants/howItWorksData'


const SECTION_WRAPPER={
    gap:'5px',
    backgroundColor: '#000'
}
export const HowItWorks=()=>{
    return(
        <Section>
            <SectionHeader title="How It Works" subtitle ="Step by Step Guide"/>
            <SectionWrapper style ={SECTION_WRAPPER}>
                {howItWorksData.map((step, idx)=>(
                <CardItem 
                    key ={idx}
                    icon={step.icon} 
                    desc={step.description}
                />))}
            </SectionWrapper>
        </Section>
    )
}