
import { Section, SectionWrapper, SectionHeader} from '../../elements';
import { ContactForm } from '../Forms';

const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}
export const Contact =()=>{
    return (
        <Section>
            <SectionHeader title="Contact Us" subtitle="We'd love to hear from you" style={PAGEHEADER_STYLE}/>
            <SectionWrapper>
                <ContactForm/>
            </SectionWrapper>
        </Section>
    )
}

