import solar_image from '../../../../assets/images/solarAnalyticHeader.png'
import { useNavigate } from 'react-router-dom'
import { Section, SectionWrapper } from '../../../elements'

export const HeaderDisplay=()=>{
    const navigate = useNavigate()
    return (
        <Section>
            <SectionWrapper>
                <div className="md:w-1/2">
                    <div className="p-5 mt-20">
                        <h1 className="text-center text-5xl font-bold text-poppins text-primary-color">AI POWERED</h1>
                        <h2 className="text-center text-xl">Energy Automation and Analytics</h2>
                        <div className="flex justify-center align-middle mt-20 w-full">
                             <button className="bg-primary-color text-xl p-5 rounded-md text-panel-color font-bold text-poppins w-full md:w-1/3" onClick={()=>navigate('/get-started')}>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <div className="">
                        <img className="w-full object-contain" src={solar_image} alt="header"/>
                    </div>
                </div>
            </SectionWrapper>
        </Section>
    )
} 

