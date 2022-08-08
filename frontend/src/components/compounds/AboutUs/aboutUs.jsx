/* <>
<p>African Solar Generation (ASG) 
    is a Swiss-Cameroonian solar company based in Yaoundé, 
    Cameroon. The company’s vision is to combat energy poverty in 
    Cameroon at all levels – from lighting for families to supplying
     electricity to businesses, farms, health centers, schools and many more
     . ASG’s goal is to install high quality solar material, imported mainly 
     from Europe, and to offer customers an outstanding after-sales and maintenance 
     service</p>
<p>OUR VISION</p>
 

 <p>We want to install environmentally friendly and 
    stable technologies so that our customers have 
    a reliable power supply.     
 

Our customers have poor or no access to a
 clean energy supply. We are committed to working 
 with our customers to find the best solution for 
 their energy needs. It is especially important for us to 
 find long-term solutions for our customers and to support 
 them even after the construction of a solar installation and to 
 ensure a smooth operation of the installation.</p>

 
 <p>
    OUR MISSION
    We carefully plan our work and use only the highest quality materials.
    To meet our own quality standards, we only install material from European or American companies. We offer appropriate guarantees and have established a reliable repair and maintenance service. Planning is a central element for ASG. We want to exchange ideas with our customers and provide exceptional service. Serious work therefore requires a certain planning time. We only accept orders that we can implement both technically and in terms of time.
</p>
<p>
    OUR VALUES
    We take responsibility for our success, but also for our failure. We strengthen and develop local and regional structures.
    We see the diversity of people and cultures as an opportunity and treat each other with respect. This enables us to find new and unconventional solutions.
    We do not live alone; we are also responsible for those who come after us. We act with a forward-looking approach and ensure that we have the strength to renew ourselves again and again.
</p>
</> */
import { Section, SectionWrapper, SectionHeader} from '../../elements';

const about =`
 clean energy supply. We are committed to working 
 with our customers to find the best solution for 
 their energy needs. It is especially important for us to 
 find long-term solutions for our customers and to support 
 them even after the construction of a solar installation and to 
 ensure a smooth operation of the installation.
`

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
                {/* <SectionText />
                <SectionImage/> */}
            </SectionWrapper>
        </Section>
    )
}