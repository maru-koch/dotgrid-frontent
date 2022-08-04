
import { Section, SectionText, SectionWrapper, SectionImage, SectionHeader} from '../../elements'
import analytics_phone from '../../../assets/images/smart_home.png'
import analytics_computer from '../../../assets/images/energy_optimization.png'

const word =[{
    title:'Energy Optimization',
    desc: `
                Automate your energy consumption by setting when you want 
                your devices to turn on or off. You can remotely select 
                the time and how long you want a particular appliance to 
                be on to save Energy and optimize performance`,

    button_text: 'Order Solar PV Panel'
},{
    title:'Smart Home',
    desc: `
               Monitor your energy consumption pattern by looking at 
               the visualization of your energy data. Our AI driven analytics will
               guide you in making the best decision.`,

    button_text: 'Request Demo'
}
]

export const WhyAnalytics =({openModal})=>{
    return(
        <Section>
            <SectionHeader title = "Why Dotgrid Analytics?" subtitle = ""/>
            <SectionWrapper>
                <SectionImage 
                    image={analytics_computer} 
                    height={'100%'} 
                    width={'100%'}
                    wrapperStyle={{height:600, width: 500}}
                    containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>
                <SectionText 
                    title ={word[0].title} 
                    description ={word[0].desc}
                    btn={true}
                    openModal={()=>openModal()}
                    btnText="Request Demo"/>
            </SectionWrapper>
         <SectionWrapper bg ={{backgroundColor:"#e6f3f8"}}>
            <SectionText 
                title ={word[1].title} 
                description ={word[1].desc}
                btn={true}
                openModal={()=>openModal()}
                btnText="Request Demo"/>

            <SectionImage 
                image={analytics_phone} 
                height={'100%'} 
                width={'70%'}
                wrapperStyle={{height:500, width:'100%'}}
                containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>
        </SectionWrapper>
        </Section>
       
    )
}