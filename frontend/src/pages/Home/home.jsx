import {HeaderDisplay, Services, EnergyAnalytics, Partners, Footer} from '../../components/compounds/Home'
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

