
import {SectionWrapper, SectionHeader} from '../../components/elements/Sections'
import {StarterImage, TimeLine} from '../../components/compounds'
// import classes from '../Contact/contact.module.css'
import { PageLayout } from '../../layout'

const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}
const wrapper={
    position: 'relative',
}

export const GetStarted =()=>{
    return (
    <PageLayout>
        <SectionHeader title="Get Started" subtitle="Begin your journey to clean energy" style={PAGEHEADER_STYLE}/>
        <SectionWrapper style = {wrapper}>
            <TimeLine/>
            <StarterImage/>
        </SectionWrapper>
    </PageLayout>)
}
