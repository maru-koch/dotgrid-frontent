
import {SectionWrapper, SectionHeader} from '../../components/elements/Sections'
import {ContactInfo, ContactForm} from '../../components/compounds/Contact'
import classes from './contact.module.css'
import { PageLayout } from '../../layout'

const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'

}
export const Contact =()=>{
    return (
    <PageLayout>
        <SectionHeader title="Contact Us" subtitle="We'd love to hear from you" style={PAGEHEADER_STYLE}/>
        <SectionWrapper style = {classes.wrapper}>
            <ContactInfo/>
            <ContactForm/>
        </SectionWrapper>
    </PageLayout>)
}
