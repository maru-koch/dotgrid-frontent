
import {Section,SectionHeader} from '../../components/elements/Sections'
import {ContactForm} from '../../components/compounds/Forms'
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
        <Section>
            <ContactForm/>
        </Section>
    </PageLayout>)
}
