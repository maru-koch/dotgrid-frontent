
import {SectionWrapper} from '../../components/elements/Sections'
import ContactImage from '../../components/compounds/Contact/contactImage'
import ContactForm from '../../components/compounds/Contact/contactForm'
import classes from './contact.module.css'
import { PageLayout } from '../../layout'

export const Contact =()=>{
    return (
    <PageLayout>
        <SectionWrapper style = {classes.wrapper}>
            <ContactImage/>
            <ContactForm/>
        </SectionWrapper>
    </PageLayout>)
}
