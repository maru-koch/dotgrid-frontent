
import { SectionHeader } from '../../components/elements/Sections'
import {SolarPanel, SolarProjects} from '../../components/compounds'
import { PageLayout } from '../../layout'
import { SolarProjects } from '../../components'

const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}
const wrapper={
    position: 'relative',
}

export const SolarInstallation =()=>{
    return (
    <PageLayout>
        <SectionHeader title="Solar Installation" subtitle="Get your PV panel Installed by Experts" style={PAGEHEADER_STYLE}/>
        <SolarPanel/>
        <SolarProjects/>
    </PageLayout>)
}
