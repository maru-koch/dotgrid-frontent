
import { Section, SectionText, SectionWrapper, SectionImage, SectionHeader} from '../../elements'
import solar_panel from '../../../assets/images/dotgrid_solar_panel.png'
import solar_pack from '../../../assets/images/solar_starter_pack.png'

const word =[{
    title:'Energy Automation',
    desc: `
                Automate your energy consumption by setting when you want your devices to turn on or off. You can select the time and how long you want a particular appliance to be on`,

    button_text: 'Order Solar PV Panel'
},{
    title:'Derive Insight',
    desc: `
               Monitor your energy consumption pattern by looking at 
               the visualization of your energy data. Our AI driven analytics when
               guide you in making the best decision.`,

    button_text: 'Request Demo'
}
]

export const whyAnalytics =()=>{
    return(
        <Section>
            <SectionHeader title = "Why Dotgrid Analytics?" subtitle = ""/>
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
                btnText="Request Demo"/>

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