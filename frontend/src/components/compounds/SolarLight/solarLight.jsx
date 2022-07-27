
import { Section, SectionWrapper, SectionImage, SectionHeader } from '../../elements'
import solar_bulb from '../../../assets/images/solar_bulb.jpeg'


export const SolarLight=()=>{
    return(
        <Section>
            <SectionHeader title = "Uninterrupted Energy" subtitle="No addictional cost, No bill, no stress"/>
            <SectionWrapper bg={{position:"relative"}} >
                <div style ={{
                    position: 'absolute', 
                    width: '500px', 
                    height: '400px',
                    zIndex:1000,
                    left:'10%', 
                    fontSize: '1.6rem',
                    padding: '30px',
                    display: 'flex',
                    textAlign: 'center',
                    color: '#fff',
                    borderRadius:'20px',
                    boxShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    fontFamily:'Poppins',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    
                    }}>
                    <p>
                        Enjoy 24/7 power supply without the extra cost of buying fuel, 
                        or the stress of enduring long queue at the petro station, non 
                        the noise pollution associated with mechanical electricity generators</p>
                </div>
                <SectionImage 
                    image={solar_bulb} 
                    bg={{width: '100%', height: 'auto'}} 
                    containerStyle={{width:'100vw'}}
                    wrapperStyle={{width:'100%',  position:'relative'}}/>
            </SectionWrapper>
        </Section>
    )
}