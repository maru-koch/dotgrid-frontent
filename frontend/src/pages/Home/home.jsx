import {HeaderDisplay, Services, EnergyAnalytics, Partners } from '../../components/compounds/Home'
import { PageLayout } from '../../layout'

export const Home=()=>{
    // home page
    return(
        <PageLayout>
            <HeaderDisplay/>
            <Services/>
            <EnergyAnalytics/>
            <Partners/>
        </PageLayout>
    )
}

