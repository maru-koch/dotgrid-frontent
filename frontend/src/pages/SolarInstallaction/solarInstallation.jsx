
import {SectionWrapper, SectionHeader} from '../../components/elements/Sections'
import {ContactInfo, ContactForm} from '../../components/compounds'
import classes from './contact.module.css'
import { PageLayout } from '../../layout'

const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}
const wrapper={
    position: 'relative',
}

export const SolarInstallation =()=>{
    return (
    <PageLayout>
        <SectionHeader title="Solar Installation" subtitle="Get your PV panel Installed by Experts" style={PAGEHEADER_STYLE}/>
        <SectionWrapper style = {wrapper}>
            <ContactInfo/>
            <ContactForm/>
        </SectionWrapper>
    </PageLayout>)
}
