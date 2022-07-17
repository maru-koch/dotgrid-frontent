
import {SectionWrapper, SectionHeader, SectionImage} from '../../components/elements/Sections'
import {TimeLine} from '../../components/compounds'
// import classes from '../Contact/contact.module.css'
import solar_pack from '../../assets/images/solar_starter_pack.png';
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
            <SectionImage btn={true} btnText = "Get Solar Pack" image={solar_pack}/>
        </SectionWrapper>
    </PageLayout>)
}
