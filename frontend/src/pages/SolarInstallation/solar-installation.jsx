
import { SectionHeader } from '../../components/elements/Sections'
import {SolarPanel, SolarProjects} from '../../components/compounds'
import { PageLayout } from '../../layout'


const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}


export const SolarInstallation =()=>{
    return (
    <PageLayout>
        <SectionHeader title="Solar Installation" subtitle="Get your PV panel Installed by Our Experts" style={PAGEHEADER_STYLE}/>
        <SolarPanel/>
        <SolarProjects/>
    </PageLayout>)
}
