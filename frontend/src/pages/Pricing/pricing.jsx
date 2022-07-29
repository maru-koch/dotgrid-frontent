import {SectionWrapper, SectionText, SectionImage, PricingCategory} from '../../components/compounds'
import {PageLayout} from '../../layout'

export const Pricing=()=>{
    return (
        <PageLayout>
            <SectionWrapper>
                <SectionText title = {''} content ={''}/>
                <SectionImage/>
            </SectionWrapper>
            <PricingCategory/>
        </PageLayout>
    )
}