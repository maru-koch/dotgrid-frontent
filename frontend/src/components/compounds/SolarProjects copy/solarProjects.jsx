import { Section, SectionWrapper, SectionHeader } from '../../elements'
import { SolarProject } from './SolarProject'
import {projects } from '../../../constants/projectData'

export const SolarProjects=()=>{
    return(
        <Section>
            <SectionHeader title="Our Portforlio" subtitle ="The projects we have executed"/>
            <SectionWrapper>
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