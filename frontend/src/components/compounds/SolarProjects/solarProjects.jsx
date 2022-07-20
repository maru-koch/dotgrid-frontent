import { Section, SectionWrapper, SectionHeader } from '../../elements'
import { SolarProject } from './SolarProject'
import {projects } from '../../../constants/projectData'

const SECTION_WRAPPER={
    gap:'5px',
    backgroundColor: '#000'
}
export const SolarProjects=()=>{
    return(
        <Section>
            <SectionHeader title="Our Portforlio" subtitle ="The projects we have executed"/>
            <SectionWrapper style ={SECTION_WRAPPER}>
                {projects.map((project, idx)=>(
                <SolarProject 
                    key ={idx}
                    image={project.image} 
                    title={project.title}
                    description={project.description}
                />))}
            </SectionWrapper>
        </Section>
    )
}