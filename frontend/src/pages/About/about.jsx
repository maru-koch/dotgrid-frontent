import {AboutAnalytics, DotgridInfo, Testimony} from '../../components/compounds'
import { SectionHeader } from '../../components/elements'
import { PageLayout } from '../../layout'


export const AboutPage =()=>{
    return (
        <PageLayout>
            <SectionHeader title ="What It Does" subtitle="Explore the features of Dotgrid"/>
            <AboutAnalytics/>
            <DotgridInfo/>
            <Testimony/>
        </PageLayout>
    )
}