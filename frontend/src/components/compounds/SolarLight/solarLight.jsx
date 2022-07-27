
import { Section, SectionWrapper, SectionImage } from '../../elements'
import solar_farm from '../../../assets/images/solar_farm.jpg'


export const SolarLight =()=>{
    return(
        <Section>
            {/* <SectionHeader title = "Uninterrupted Energy" subtitle="No addictional cost, No bill, no stress"/> */}
            <SectionWrapper bg={{display:'flex', justifyContent: 'center', alignItems: 'center', padding:'50px'}} >
                <div style ={{
                    position: 'absolute', 
                    width: '700px', 
                    height: '400px',
                    zIndex:1000,
                    fontSize: '1.6rem',
                    padding: '50px',
                    display: 'flex',
                    textAlign: 'center',
                    color:'#fff',
                    borderRadius:'20px',
                    boxShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    fontFamily:'Poppins',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    
                    }}>
                    <p>
                        Enjoy 24/7 power supply without the extra cost of buying fuel, 
                        the stress of enduring long queue at the patrol station, or 
                        the noise pollution.</p>
                </div>
                <SectionImage 
                    image={solar_farm} 
                    imageStyle={{width: '100%', height: 600, position:'sticky', backgroundSize: 'cover'}} 
                    containerStyle={{width:'100%', height:600}}
                    wrapperStyle={{width:'100%',  position:'relative'}}/>
            </SectionWrapper>
        </Section>
    )
}