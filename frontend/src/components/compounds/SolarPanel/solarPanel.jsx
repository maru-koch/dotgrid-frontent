
import { Section, SectionText, SectionWrapper, SectionImage } from '../../elements'
import solar_panel from '../../../assets/images/dotgrid_solar_panel.png'
import solar_pack from '../../../assets/images/solar_starter_pack.png'

const word =[{
    title:'Get Your Solar PV',
    desc: `
                Lack of electricity supply has hampered the growth of
                so many businesses and has made families grope in the dark. We are here to change that narative.
                Our vission is to make clean energy accessible by all. We are on a mission to empower home and business owners across Africa
                maximize their potentials. `,

    button_text: 'Order Solar PV Panel'
},{
    title:'Solar Installation',
    desc: `
                Have your solar energy generation system set up by our solar installation expert for optimum energy
                generation. We utilize the lates technology and tool in giving the best clean energy experience. `,

    button_text: 'Order Solar PV Panel'
}
]

export const SolarPanel=()=>{
    return(
        <Section>
            <SectionWrapper>
                <SectionImage 
                    image={solar_pack} 
                    height={'100%'} 
                    width={'50%'}
                    wrapperStyle={{height:500, width: 500}}
                    containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>
                <SectionText 
                    title ={word[0].title} 
                    description ={word[0].desc}
                    btn={true}
                    btnText="Order Solar PV"/>
            </SectionWrapper>
         <SectionWrapper bg ={{backgroundColor:"#e6f3f8"}}>

            <SectionText 
                title ={word[1].title} 
                description ={word[1].desc}
                btn={true}
                btnText="Install Solar"/>

            <SectionImage 
                image={solar_panel} 
                height={'100%'} 
                width={'50%'}
                wrapperStyle={{height:700, width: 500}}
                containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>

        </SectionWrapper>
        </Section>
       
    )
}