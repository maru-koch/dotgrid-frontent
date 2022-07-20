
import { SectionHeader } from '../../components/elements/Sections'
import {SolarAnalytic } from '../../components/compounds'
import { PageLayout } from '../../layout'


const PAGEHEADER_STYLE={
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#333'
}


export const SolarAnalytics =()=>{
    return (
    <PageLayout>
        <SectionHeader title="Solar Analytics" subtitle="Track Your Energy Consumption and Save Cost" style={PAGEHEADER_STYLE}/>
        <SolarAnalytic/>
    </PageLayout>)
}
