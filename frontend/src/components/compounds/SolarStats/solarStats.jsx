
import { useNavigate } from 'react-router-dom';
import { Section, SectionHeader, SectionWrapper } from '../../elements/Sections';
import classes from './solarStats.module.css';

import { statsData } from '../../../constants/statData'


const Stat =({icon, title, desc})=>{
    return (
        <main className="m-5">
            <section className="text-center">
                <i className={`text-4xl p-5 text-accentColor-100 ${icon}`}></i>
                <h2 className ="font-poppins text-textColor-100 text-2xl pb-2">{title}</h2>
                <p className='font-mulish text-lg text-background-color-100'>{desc}</p>
            </section>
        </main>
    )
}

const SolarStat =()=>{
    return (
        <main className="p-5 md:p-0 lg:p-10 bg-green-700 bg-gradient-to-tr bg-btnGradient w-full" >
            <section className="grid grid-cols-2 grid-rows-2">
                {statsData.map(stat =><Stat icon = {stat.icon} title ={stat.title} desc={stat.description}/>)}
            </section>
        </main>
    )
}

export const SolarStats=()=>{ 
    const navigate = useNavigate()
    return (
    <Section>
        <SectionHeader title = "Our Statistics" subtitle = "Numbers don't lie. our portfolio speaks of our credibility"/>
        <SectionWrapper >
            <div className="w-full md:w-1/2">
                <SolarStat/>
            </div>
            <div className = "w-full md:w-1/2">
                <div className = "p-5 md:10 lg:p-20">
                    <h2 className="text-textColor-200 text-2xl font-openSans py-5 lg:py-10">Enterprise Mini-grid Solutions</h2>
                    <p className="text-textColor">
                        Dotgrid Analytics and automation enables City, Estates, 
                        and community  managers to monitor and track energy consumption of building or appartments
                        connected to their grids.<br/>
                        Dotgrid provides a dedicated dashboard to manage energy data and provides insight for analysis and reporting.
                    </p>
                </div>
                <div className = "flex justify-center">
                    <button className="bg-yellow-600" onClick={()=>navigate("/contact")}>Contact Us</button>
                </div>
            </div>
          
        </SectionWrapper>
    </Section>)
}

