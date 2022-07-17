import { Section, SectionWrapper, SectionHeader } from '../../elements'
import {SolarProject} from './SolarProject'

export const SolarProjects=({projects})=>{
    return(
        <Section>
            <SectionHeader title="Our Portforlio" subtitle ="The projects we have executed"/>
            <SectionWrapper>
                {projects.map((project, idx)=>(
                <SolarProject 
                    image={project.image} 
                    title={project.title}
                    description={project.description}
                />))}
            </SectionWrapper>
        </Section>
    )
}