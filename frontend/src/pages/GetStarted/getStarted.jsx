
import {SectionWrapper, SectionHeader} from '../../components/elements/Sections'
import {ContactForm, TimeLine} from '../../components/compounds'
import classes from '../Contact/contact.module.css'
import { PageLayout } from '../../layout'

const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}
const wrapper={
    position: 'relative',
}

export const Contact =()=>{
    return (
    <PageLayout>
        <SectionHeader title="Get Started" subtitle="We'd love to hear from you" style={PAGEHEADER_STYLE}/>
        <SectionWrapper style = {wrapper}>
            <TimeLine/>
            <ContactForm/>
        </SectionWrapper>
    </PageLayout>)
}
