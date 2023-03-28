
import { Section,SectionImage, SectionWrapper, SectionHeader} from '../../elements';
import { ContactForm } from '../Forms';
import image from '../../../assets/images/energy_optimization.png'

const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}
export const Contact =()=>{
    return (
        <Section bg={{margin:'0px', padding: '0px'}}>
            <SectionHeader title="Contact Us" subtitle="We'd love to hear from you" style={PAGEHEADER_STYLE}/>
            <SectionWrapper bg={{ backgroundColor:'var(--primary-color', width:'100vw', padding: '40px 50px'}}>
                <SectionImage image={image}
                containerStyle={{width:"60vw"}}
                />
                <ContactForm/>
            </SectionWrapper>
        </Section>
    )
}

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />